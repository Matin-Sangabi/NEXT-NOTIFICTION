import http from "./httpRequest";

export async function login(values) {
  const data = await http.post("/api/v1/auth/login", values);
  return data.data;
}

export async function register(values) {
  const data = await http.post("/api/v1/auth/register", values);
  return data.data;
}


export async function getUser() {
  const data = await http.get("/api/v1/user");
  return data.data;
}

export async function getAllUser() {
  const data = await http.get("/api/v1/user/all-user");
  return data.data;
}
