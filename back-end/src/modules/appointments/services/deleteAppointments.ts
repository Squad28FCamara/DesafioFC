import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '@modules/appointments/repositories/appointmentsRepository';
import AppError from '@shared/errors/AppError';

interface IDeleteAppointment {
  providerId: string;
  id: string;
}

class DeleteAppointment {
  public async execute({ providerId, id }: IDeleteAppointment) {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointment = await appointmentsRepository.findOne({
      where: {
        providerId,
        id,
      },
    });

    if (!appointment) {
      throw new AppError('cannot find the appointment', 404);
    }
    await appointmentsRepository.delete(appointment.id);
  }
}

export default DeleteAppointment;
