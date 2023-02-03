import { taskRepository } from '../repository/taskRepository';
import { createExpireDate } from '../../../helper/handleDate';
import { HttpException } from '../../../errors/HttpException';

export const createTask = async (
  title: string,
  description: string,
  expire_day: number
) => {
  const days = expire_day ? expire_day : 5;
  const expireDays = createExpireDate(days);

  const task = await taskRepository.create({
    title: title,
    description: description,
    expire_in: expireDays,
  });

  if (!task) {
    throw new HttpException(500, 'INTERNAL SERVER ERROR');
  }

  return task;
};
