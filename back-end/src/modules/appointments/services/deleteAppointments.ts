import { getRepository } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

interface IDeleteAppointment {
  providerId: string;
  id: string;
}

class DeleteAppointment {
  public async execute(deleteAppointmentData: IDeleteAppointment) {
    const appointmentsRepository = getRepository(Appointment);

    await appointmentsRepository.delete(deleteAppointmentData);
  }
}

export default DeleteAppointment;
