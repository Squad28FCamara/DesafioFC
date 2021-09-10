import { getRepository } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import User from '@modules/users/infra/typeorm/entities/User';

class FindAppointmentsByUser {
  public async execute(providerId, id: string) {
    const appointmentsRepository = getRepository(Appointment);
    const userRepository = getRepository(User);

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
