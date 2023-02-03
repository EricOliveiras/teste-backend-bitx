import { Router } from 'express';
import { taskController } from '../modules/task/controller/taskController';
import { handleValidator } from '../validators/handleValidator';
import { taskValidator } from '../validators/task';

export const taskRouter = Router();

taskRouter.post('/',
  taskValidator.create,
  handleValidator,
  taskController.create
);

taskRouter.get('/search/:id',
  taskValidator.id,
  handleValidator,
  taskController.read
);

taskRouter.get('/',
  taskController.readAll
);

taskRouter.put('/update/:id',
  taskValidator.id,
  taskValidator.update,
  handleValidator,
  taskController.update
);

taskRouter.put('/addmember/:id',
  taskValidator.id,
  taskValidator.addMember,
  handleValidator,
  taskController.addMember
);

taskRouter.put('/removemember/:id',
  taskValidator.id,
  taskValidator.removeMember,
  handleValidator,
  taskController.removeMember
);

taskRouter.delete('/delete/:id',
  taskValidator.id,
  handleValidator,
  taskController.delete
);
