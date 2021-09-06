import { getRepository } from 'typeorm';

import Appointment from '../entities/appointments/Appointment';

class FindOccupiedChairs {
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

export default FindOccupiedChairs;
