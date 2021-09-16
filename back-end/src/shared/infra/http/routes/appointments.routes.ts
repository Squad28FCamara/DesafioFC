import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '@modules/appointments/repositories/appointmentsRepository';
import CreateAppointment from '@modules/appointments/services/createAppointment';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import DeleteAppointment from '@modules/appointments/services/deleteAppointments';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const { date, station, pole } = request.body;
  const providerId = request.user.id;
  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointment();

  const appointment = await createAppointment.execute({
    date: parsedDate,
    providerId,
    station,
    pole,
  });

  return response.json(appointment);
});

appointmentsRouter.get('/user', async (request, response) => {
  const providerId = request.user.id;

  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find({
    where: {
      providerId,
    },
  });

  return response.json(appointments);
});

appointmentsRouter.delete('/:id', async (request, response) => {
  const providerId = request.user.id;
  const id = request.params.id;

  const deleteAppointmentsService = new DeleteAppointment();

  await deleteAppointmentsService.execute({
    providerId,
    id,
  });
  return response.json({
    message: 'success',
  });
});

export default appointmentsRouter;
