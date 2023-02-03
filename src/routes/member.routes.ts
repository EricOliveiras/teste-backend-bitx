import { Router } from 'express';
import { memberController } from '../modules/member/controller/memberController';
import { handleValidator } from '../validators/handleValidator';
import { memberValidator } from '../validators/member';

export const memberRouter = Router();

memberRouter.post('/',
  memberValidator.create,
  handleValidator,
  memberController.create
);

memberRouter.get('/search/:id',
  memberValidator.id,
  handleValidator,
  memberController.read
);

memberRouter.get('/',
  memberController.readAll
);

memberRouter.put('/update/:id',
  memberValidator.create,
  handleValidator,
  memberController.update
);

memberRouter.delete('/delete/:id',
  memberValidator.id,
  handleValidator,
  memberController.delete
);
