import http from "./httpRequest";

export async function subscribe(values) {
  const data = await http.post("/api/v1/web-push/subscribe", values);
  return data.data;
}

export async function sendNotification(values) {
  const data = await http.post("/api/v1/web-push/send-notification", values);
  return data.data;
}

