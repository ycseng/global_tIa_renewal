import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//이메일 문의
export async function postSendEmail(payload) {
  return await axios.post("/api/tia/email", payload);
}
