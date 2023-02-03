import { Task } from '@prisma/client';
import { IMember } from '../../../types/IMember';
import { ITask, ITaskUpdate } from '../../../types/ITask';
import { prisma as db } from '../../../libs/prisma';

export const taskRepository = {
  async create({ title, description, expire_in }: ITask): Promise<Task> {
    const task = await db.task.create({
      data: {
        title,
        description,
        expire_in
      },
    });

    return task;
  },

  async read(id: string): Promise<Task | null> {
    const task = await db.task.findFirst({
      where: { id },
    });

    return task;
  },

  async readAll(): Promise<Task[] | null> {
    const tasks = await db.task.findMany();

    return tasks;
  },

  async addMember(id: string, member: Array<IMember> | IMember): Promise<Task> {
    const task = await db.task.update({
      where: { id },
      data: {
        member: {
          push: member
        }
      },
    });

    return task;
  },

  async removeMember(id: string, member: Array<IMember> | IMember): Promise<Task> {
    const task = await db.task.update({
      where: { id },
      data: {
        member: {
          set: member || []
        }
      },
    });

    return task;
  },

  async update(id: string, data: ITaskUpdate): Promise<Task | null> {
    const task = await db.task.update({
      where: { id },
      data: data,
    });

    return task;
  },

  async delete(id: string): Promise<void> {
    await db.task.delete({
      where: { id },
    });
  },
};
