import { Router } from 'express';

const routes = Router();

routes.get('/routes', (request, response) => {
  return response.json({
    message: 'akelamensagem',
  });
});

export default routes;
