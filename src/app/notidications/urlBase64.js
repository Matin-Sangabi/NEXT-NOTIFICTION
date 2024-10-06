export default function urlBase64ToUint8Array(base64String) {
  // اضافه کردن پدینگ (اگر طول رشته مضرب 4 نباشد)
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);

  // جایگزینی کاراکترهای خاص Base64 URL-safe
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  try {
    // تبدیل Base64 به باینری
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    // پر کردن Uint8Array با مقادیر کاراکتری
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
  } catch (error) {
    console.error("Failed to decode base64 string:", error);
    return null;
  }
}
