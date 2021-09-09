import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import appointmentsRouter from './appointments.routes';
import appointmentsByUserRoutes from './appointmentsByUser.routes';

const routes = Router();

routes.use('/userappointments', appointmentsByUserRoutes);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
