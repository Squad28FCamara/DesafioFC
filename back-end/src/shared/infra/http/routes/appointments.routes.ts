import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../../../../modules/appointments/repositories/appointmentsRepository';
import createAppointmentService from '../../../../modules/appointments/services/createAppointmentService';
import ensureAuthenticated from '../../../../modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  console.log(request.user);

  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date, station, pole } = request.body;
  const parsedDate = parseISO(date);

  const createAppointment = new createAppointmentService();

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
    station,
    pole,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
