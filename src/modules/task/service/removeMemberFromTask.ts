import { taskRepository } from '../repository/taskRepository';
import { memberRepository } from '../../member/repository/memberRepository';
import { HttpException } from '../../../errors/HttpException';
import { Member } from '@prisma/client';
import { removeItem, removeItemObject } from '../../../helper/removeItem';
import { IMember } from '../../../types/IMember';

export const removeMemberFromTask = async (
  id: string,
  member_id: string
): Promise<void> => {
  const task = await taskRepository.read(id);

  if (!task) {
    throw new HttpException(404, 'Task not found');
  }

  const checkIfMemberExist = await memberRepository.read(member_id);
  const { email } = <Member>checkIfMemberExist;
  const tasks = <string[]>checkIfMemberExist?.task;
  const members = <IMember[]>task.member;
  const checkIfMemberExistInTask = await memberRepository.checkTaskInMember(email, id);

  if (!checkIfMemberExistInTask) {
    throw new HttpException(404, 'The member does not exist in the task');
  }

  const newArrayTask = removeItem(tasks, id);
  const newArrayMembers = removeItemObject(members, email);

  await memberRepository.removeTask(member_id, newArrayTask);
  await taskRepository.removeMember(id, newArrayMembers);
};
