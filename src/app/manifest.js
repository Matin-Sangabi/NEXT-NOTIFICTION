export default function manifest() {
  return {
    name: "Friends",
    short_name: "Friends",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#000000",
    display: "standalone",
    start_url: "/",
    screenshots: [
      {
        src: "/DESKTOP.png", // برای دسکتاپ
        sizes: "1916x941",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/MOBILE.png", // برای موبایل
        sizes: "365x793",
        type: "image/png",
        form_factor: "narrow", // یا مقدار دیگری به جز wide
      },
    ],
  };
}
