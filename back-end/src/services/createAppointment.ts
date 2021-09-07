import { getRepository } from 'typeorm';

import Appointment from '../entities/appointments/Appointment';

interface ICreateAppointment {
  date: Date;
  provider_id: string;
}

class CreateAppointments {
  public async execute({ date, provider_id }: ICreateAppointment) {
    const appointmentsRepository = getRepository(Appointment);
  }
}

export default CreateAppointments;
