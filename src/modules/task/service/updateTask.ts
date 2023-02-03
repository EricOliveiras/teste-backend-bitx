import { HttpException } from '../../../errors/HttpException';
import { createExpireDate } from '../../../helper/handleDate';
import { taskRepository } from '../repository/taskRepository';

export const updateTask = async (
  id: string,
  title: string,
  description: string,
  task_status: string,
  expire_day: number,
) => {
  const task = await taskRepository.read(id);
  const newExpireDate = createExpireDate(expire_day);

  if (!task) {
    throw new HttpException(404, 'Task not found');
  }

  const handleDate = expire_day ? newExpireDate : <Date>task.expire_in;

  const updateTask = await taskRepository.update(id, {
    title,
    description,
    task_status,
    expire_in: handleDate,
  });

  return updateTask;
};
