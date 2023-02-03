import { HttpException } from '../../../errors/HttpException';
import { taskRepository } from '../repository/taskRepository';

export const deleteTask = async (id: string) => {
  const task = await taskRepository.read(id);

  if (!task) {
    throw new HttpException(404, 'Task not found');
  }

  return await taskRepository.delete(id);
};
