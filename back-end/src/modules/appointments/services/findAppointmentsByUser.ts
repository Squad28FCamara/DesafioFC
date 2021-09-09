import { getRepository } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import User from '@modules/users/infra/typeorm/entities/User';

class FindAppointmentsByUser {
  public async execute(provider_id, id: string) {
    const appointmentsRepository = getRepository(Appointment);
    const userRepository = getRepository(User);

    if (provider_id === id) {
      const appointmentsByUser = await appointmentsRepository.find({
        where: {
          provider_id,
        },
      });

      return appointmentsByUser;
    }

    return await appointmentsRepository.find();
  }
}
export default FindAppointmentsByUser;
