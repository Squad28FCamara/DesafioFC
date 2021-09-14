import 'express-async-errors';

import cors from 'cors';
import express from 'express';
import routes from './routes';

import connection from '@shared/infra/typeorm/';
import error from '@shared/infra/http/errors/error';
import asyncSeed from '@modules/users/infra/services/seedUser';

async function databaseSetup() {
  await connection();
  asyncSeed();
}

databaseSetup();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(error);

app.listen(3333, () => {
  console.log('Server Started');
  console.log('link: http://localhost:3333');
  console.log('ROUTES: "/", "/users", "/sessions", "/appointments"');
});
