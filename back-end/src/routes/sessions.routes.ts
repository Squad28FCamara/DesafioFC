import { Router } from 'express';

import AuthenticateUserService from '../services/authenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authentcateUser = new AuthenticateUserService();

  const { user, token } = await authentcateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
