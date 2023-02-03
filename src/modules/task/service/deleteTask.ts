import { Member, Task } from '@prisma/client';
import { HttpException } from '../../../errors/HttpException';
import { removeItem } from '../../../helper/removeItem';
import { IMember } from '../../../types/IMember';
import { memberRepository } from '../../member/repository/memberRepository';
import { taskRepository } from '../repository/taskRepository';

export const deleteTask = async (task_id: string) => {
  const task = await taskRepository.read(task_id);

  if (!task) {
    throw new HttpException(404, 'Task not found');
  }
  
  const { member } = <Task>task;

  const membersTask = <IMember[]>member;

  membersTask.map(async member => {
    const getMember = await memberRepository.readByEmail(member.email);
    const { id } = <Member>getMember;
    const memberTask = <string[]>getMember?.task;
    const newArrayMembers = removeItem(memberTask, task_id);
    await memberRepository.removeTask(id, newArrayMembers);
  });

  return await taskRepository.delete(task_id);
};
