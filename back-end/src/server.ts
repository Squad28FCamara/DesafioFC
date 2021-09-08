import 'express-async-errors';

import express from 'express';
import routes from './routes/';

import './database';
import error from './middlewares/error';

const app = express();

app.use(express.json());
app.use(routes);
app.use(error);

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World!',
  });
});

app.listen(3333, () => {
  console.log('Server Started');
  console.log('link: http://localhost:3333');
  console.log('ROUTES: "/", "/users", "/sessions", "/appointments"');
});
