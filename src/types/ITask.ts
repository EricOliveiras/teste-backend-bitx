import { IMember } from './IMember';

export type ITask = {
  title: string;
  description: string;
  member?: IMember[] | [];
  expire_in?: Date;
}

export type ITaskUpdate = {
  title?: string;
  description?: string;
  member?: IMember[] | [];
  task_status?: string;
  expire_in?: Date;
}
