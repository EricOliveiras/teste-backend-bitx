import { HttpException } from '../../../errors/HttpException';
import { taskRepository } from '../repository/taskRepository';

export const readAllTask = async () => {
  const tasks = await taskRepository.readAll();

  if (!tasks) {
    throw new HttpException(500, 'INTERNAL SERVER ERROR');
  }

  return tasks;
};
