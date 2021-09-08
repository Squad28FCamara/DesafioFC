import { getRepository } from 'typeorm';

import Appointment from '../../modules/appointments/infra/typeorm/entities/Appointment';

class FindOccupiedStation {
  public async execute(date: Date) {
    const appointmentsRepository = getRepository(Appointment);

    const appointments = await appointmentsRepository.find({
      where: {
        date,
      },
    });

    return appointments;
  }
}

export default FindOccupiedStation;
