const axios = require('axios');
const { base_url } = require('../config');

async function createSession({ email, password }) {
  const { data } = await axios.post(base_url + '/sessions', {
    email,
    password,
  });

  return data;
}

createSession();
