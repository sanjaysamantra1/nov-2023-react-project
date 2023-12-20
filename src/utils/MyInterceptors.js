import axios from "axios";

export function myInterceptor1() {
  axios.interceptors.request.use((req) => {
    console.log("my interceptor -1 called....")
    req.headers.authorization = "my secret token";
    return req;
  });
}
