import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsRepository from '@modules/appointments/repositories/appointmentsRepository';

const appointmentsByUserRoutes = Router();

appointmentsByUserRoutes.use(ensureAuthenticated);

appointmentsByUserRoutes.get('/', async (request, response) => {
  const providerId = request.user.id;

  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find({
    where: {
      providerId,
    },
  });

  return response.json(appointments);
});
export default appointmentsByUserRoutes;
