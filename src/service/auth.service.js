import http from "./httpRequest";

export async function login(values) {
  const data = await http.post("/api/v1/auth/login", values);
  return data.data;
}
