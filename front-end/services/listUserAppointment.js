const axios = require('axios');
const { base_url } = require('../config');

async function listUserAppointments(token) {
  const { data } = await axios.get(base_url + '/userappointments', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  for (const appointment of data) {
    appointment.date = appointment.date.split('T')[0];
  }

  return data;
}

module.exports = listUserAppointments;
