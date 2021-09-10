import { getRepository } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

class FindAllAppointments {
  public async execute(providerId?: string) {
    const appointmentsRepository = getRepository(Appointment);

    if (providerId) {
      const appointments = await appointmentsRepository.find({
        where: {
          providerId,
        },
      });

      return appointments;
    }

    return await appointmentsRepository.find();
  }
}

export default FindAllAppointments;
