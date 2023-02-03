import { Router } from 'express';
import { memberController } from '../modules/member/controller/memberController';

export const memberRouter = Router();

memberRouter.post('/', memberController.create);
memberRouter.get('/:id', memberController.read);
memberRouter.get('/', memberController.readAll);
memberRouter.put('/update/:id', memberController.update);
memberRouter.delete('/delete/:id', memberController.delete);
