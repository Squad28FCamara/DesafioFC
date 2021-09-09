import { EntityRepository, Repository } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Array<Appointment> | null> {
    const findAppointment = await this.find({
      where: { date },
    });
    return findAppointment || null;
  }
}

export default AppointmentsRepository;
