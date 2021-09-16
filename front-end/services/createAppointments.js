const axios = require('axios');
const { base_url } = require('../config');

async function createAppointment({ date, station, pole, token }) {
  const { data } = await axios.post(
    base_url + '/appointments',
    {
      date,
      station,
      pole,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return data;
}

module.exports = createAppointment;
