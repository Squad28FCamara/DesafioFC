const axios = require("axios");
const config = require("../config")

async function createSession({
  email,
  password,
}){
  const {data} = await axios.post(config.base_url + "/sessions", {email, password})

  console.log(data)
  
  return data
}

createSession()
