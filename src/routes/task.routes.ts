import { Router } from 'express';
import { taskController } from '../modules/task/controller/taskController';

export const taskRouter = Router();

taskRouter.post('/', taskController.create);
taskRouter.get('/:id', taskController.read);
taskRouter.get('/', taskController.readAll);
taskRouter.put('/update/:id', taskController.update);
taskRouter.put('/addmember/:id', taskController.addMember);
taskRouter.put('/removemember/:id', taskController.removeMember);
taskRouter.delete('/delete/:id', taskController.delete);
