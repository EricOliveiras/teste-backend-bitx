import { HttpException } from '../../../errors/HttpException';
import { taskRepository } from '../repository/taskRepository';

export const readTask = async (id: string) => {
  const task = await taskRepository.read(id);

  if (!task) {
    throw new HttpException(404, 'Task not found');
  }

  return task;
};
