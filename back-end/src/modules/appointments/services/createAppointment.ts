import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import AppointmentsRepository from '@modules/appointments/repositories/appointmentsRepository';

interface ICreateAppointment {
  date: Date;
  providerId: string;
  station: string;
  pole: string;
}

class createAppointment {
  public async execute({
    date,
    providerId,
    station,
    pole,
  }: ICreateAppointment): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointmentDate = startOfHour(date);

    const appointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate
    );

    const samePole: Array<Appointment> = [];

    appointmentInSameDate.forEach((appointment) => {
      if (appointment.pole === pole) {
        samePole.push(appointment);
      }
    });

    if (pole === 'São Paulo') {
      if (samePole.length === 240) {
        throw new AppError('This pole is already full');
      }
    }
    if (pole === 'Santos') {
      if (samePole.length === 40) {
        throw new AppError('This pole is already full');
      }
    }

    samePole.forEach((appointment) => {
      if (appointment.station === station) {
        throw new AppError('This station is already booked');
      }
    });

    const appointment = appointmentsRepository.create({
      providerId,
      date: appointmentDate,
      station,
      pole,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default createAppointment;
