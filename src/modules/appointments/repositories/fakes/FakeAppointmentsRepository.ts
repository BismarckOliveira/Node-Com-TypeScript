import { uuid } from 'uuidv4'
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository'

import ICreateAppointimentDTO from '@modules/appointments/dtos/ICreateAppointimentDTO'
import Appointment from '../../infra/typeorm/entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(appointments =>
      appointments.date  === date
      );

      return findAppointment;
  }

  public async create({
    date,
    provider_id
  }: ICreateAppointimentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: uuid(), date, provider_id})

    this.appointments.push(appointment)

    return appointment;
  }
}

export default AppointmentsRepository;
