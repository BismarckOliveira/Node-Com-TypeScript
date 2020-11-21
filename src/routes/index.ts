// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

import CreateUserService from '../services/CreateUserService';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
