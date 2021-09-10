import axios from "axios";
import config from "../config"

async function createSession({
  email,
  password,
}){
  const {data} = await axios.post(config.base_url + "/sessions", {email, password})
  
  return data
}

export default createSession