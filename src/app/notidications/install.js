"use client";

import { useState, useEffect } from "react";
import AllowNotifications from "./AllowNotifications";

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) {
    return <AllowNotifications />; // Don't show install button if already installed
  }

  return (
    <div className="w-full  py-2 bg-primary flex items-center justify-end flex-col border rounded-2xl ">
      <h3 className="text-center font-semibold">Install App</h3>
      <button>Add to Home Screen</button>
      {isIOS && (
        <p className="font-normal mt-2 px-3">
          To install this app on your iOS device, tap the share button
          <span role="img" aria-label="share icon">
            {" "}
            ⎋{" "}
          </span>
          and then Add to Home Screen
          <span role="img" aria-label="plus icon">
            {" "}
            ➕{" "}
          </span>
          
        </p>
      )}
    </div>
  );
}
