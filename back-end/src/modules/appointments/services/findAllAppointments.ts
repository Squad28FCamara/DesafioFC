import { getRepository } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

class FindAllAppointments {
  public async execute(provider_id?: string) {
    const appointmentsRepository = getRepository(Appointment);

    if (provider_id) {
      const appointments = await appointmentsRepository.find({
        where: {
          provider_id,
        },
      });

      return appointments;
    }

    return await appointmentsRepository.find();
  }
}

export default FindAllAppointments;
