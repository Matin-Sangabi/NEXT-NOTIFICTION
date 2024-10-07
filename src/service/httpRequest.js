import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
  patch: app.patch,
};


export default http;