import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import FindAppointmentsByUser from '@modules/appointments/services/findAppointmentsByUser';
import AppointmentsRepository from '@modules/appointments/repositories/appointmentsRepository';

const appointmentsByUserRoutes = Router();

appointmentsByUserRoutes.use(ensureAuthenticated);

appointmentsByUserRoutes.get('/', async (request, response) => {
  const provider_id = request.user.id;

  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find({
    where: {
      provider_id,
    },
  });

  return response.json(appointments);
});
export default appointmentsByUserRoutes;
