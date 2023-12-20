import axios from "axios";

const client = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
});
client.interceptors.request.use((req) => {
  req.meta = req.meta || {};
  req.meta.requestStartedAt = new Date().getTime();
  return req;
});
client.interceptors.response.use(res => {
  res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt
  return res;
},
res => {
  res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt
  throw res;
});

export default client;
