import { Request, Response } from 'express';
import { createTask } from '../service/createTask';
import { deleteTask } from '../service/deleteTask';
import { readAllTask } from '../service/readAllTasks';
import { readTask } from '../service/readTask';
import { updateTask } from '../service/updateTask';

export const taskController = {
  async create(req: Request, res: Response) {
    const { title, description, expire_day } = req.body;

    const task = await createTask(
      title,
      description,
      expire_day
    );

    return res.status(201).json(task);
  },

  async read(req: Request, res: Response) {
    const { id } = req.params;

    const task = await readTask(id);

    return res.status(200).json(task);
  },

  async readAll(req: Request, res: Response) {
    const tasks = await readAllTask();

    return res.status(200).json(tasks);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, task_status, expire_day } = req.body;

    const updatedTask = await updateTask(
      id,
      title,
      description,
      task_status,
      expire_day
    );

    return res.status(200).json(updatedTask);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteTask(id);

    return res.sendStatus(200);
  },
};
