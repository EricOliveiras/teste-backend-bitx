import { Member } from '@prisma/client';
import { HttpException } from '../../../errors/HttpException';
import { removeItemObject } from '../../../helper/removeItem';
import { IMember, IMemberUpdate } from '../../../types/IMember';
import { taskRepository } from '../../task/repository/taskRepository';
import { memberRepository } from '../repository/memberRepository';

export const updateMember = async (id: string, { name, email }: IMemberUpdate): Promise<Member> => {
  const member = await memberRepository.read(id);

  if (!member) {
    throw new HttpException(404, 'Member not found');
  }

  const updatedMember = await memberRepository.update(id, {
    name,
    email
  });

  const tasks = <string[]>member.task;

  tasks.map(async id => {
    const checkTask = await memberRepository.checkTaskInMember(member.email, id);

    if (checkTask) {
      const getTasks = await taskRepository.read(id);
      const membersTask = <IMember[]>getTasks?.member;

      const newArrayMembers = removeItemObject(membersTask, member.email);
      await taskRepository.removeMember(id, newArrayMembers);
      await taskRepository.addMember(id, <Member>{ name, email });
    }

  });

  return updatedMember;
};
