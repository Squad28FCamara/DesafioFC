import { createConnection } from 'typeorm';

async function connection() {
  await createConnection();
}

export default connection;
