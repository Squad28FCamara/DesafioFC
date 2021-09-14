import { getRepository } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

class FindAppointmentsByUser {
  public async execute(providerId, id: string) {
    const appointmentsRepository = getRepository(Appointment);

    if (providerId === id) {
      const appointmentsByUser = await appointmentsRepository.find({
        where: {
          providerId,
        },
      });

      return appointmentsByUser;
    }

    return await appointmentsRepository.find();
  }
}
export default FindAppointmentsByUser;
