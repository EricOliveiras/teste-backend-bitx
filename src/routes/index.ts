import { Router } from 'express';
import { memberRouter } from './member.routes';
import { rootRouter } from './root.routes';
import { taskRouter } from './task.routes';

export const routes = Router();

routes.use('/task', taskRouter);
routes.use('/member', memberRouter);
routes.use('/', rootRouter);
