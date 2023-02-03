import { Router } from 'express';
import { rootRouter } from './root.routes';
import { taskRouter } from './task.routes';

export const routes = Router();

routes.use('/task', taskRouter);
routes.use('/', rootRouter);
