/* eslint-disable camelcase */
import { Router } from 'express';
import { parseISO } from 'date-fns';
import CreateAppointmenteService from '@modules/appointments/services/CreateAppointmenteService';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

//appointmentsRouter.get('/', async (request, response) => {
 // const appointments = await appointmentsRepository.find();

 // return response.json(appointments);
//});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const appointmentsRepository = new AppointmentsRepository();
  const createAppointment = new CreateAppointmenteService(
    appointmentsRepository);

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
