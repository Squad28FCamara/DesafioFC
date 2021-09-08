import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Appointment from '../entities/appointments/Appointment';
import AppointmentsRepository from '../repositories/appointmentsRepository';

interface ICreateAppointment {
  date: Date;
  provider_id: string;
  station: string;
  pole: string;
}

class createAppointmentService {
  public async execute({
    date,
    provider_id,
    station,
    pole,
  }: ICreateAppointment): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointmentDate = startOfHour(date);

    const appointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate
    );

    const samePole = appointmentInSameDate.map(
      (appointment) => appointment.pole === pole
    );

    if (pole === 'SãoPaulo') {
      if (samePole.length === 240) {
        throw new AppError('This pole is lotado');
      }
    } else {
      if (samePole.length === 40) {
        throw new AppError('This pole is lotado');
      }
    }

    if (appointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }
    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
      station,
      pole,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default createAppointmentService;
