import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { uuid } from 'uuidv4';
import User from '../users/User';

@Entity('Appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;
}
