import { taskRepository } from '../repository/taskRepository';
import { memberRepository } from '../../member/repository/memberRepository';
import { HttpException } from '../../../errors/HttpException';
import { createMember } from '../../member/service/createMember';
import { Task } from '@prisma/client';

export const addMemberInTask = async (
  id: string,
  name: string,
  email: string
): Promise<Task> => {
  const task = await taskRepository.read(id);

  if (!task) {
    throw new HttpException(404, 'Task not found');
  }

  const checkIfMemberExist = await memberRepository.readByEmail(email);
  const checkIfMemberExistInTask = await memberRepository.checkTaskInMember(email, id);

  if (checkIfMemberExistInTask) {
    throw new HttpException(409, 'Member already exists in task');
  }

  if (checkIfMemberExist) {
    const addedMember = await taskRepository.addMember(id, { name, email });
    await memberRepository.addTask(checkIfMemberExist.id, id);

    return addedMember;
  } else {
    const createdMember = await createMember(name, email);
    const addedMember = await taskRepository.addMember(id, { name, email });
    await memberRepository.addTask(createdMember.id, id);

    return addedMember;
  }
};
