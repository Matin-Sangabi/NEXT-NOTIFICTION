import Image from "next/image";
import PushNotificationManager from "./notidications/manager";
import InstallPrompt from "./notidications/install";

export default function Home() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
}
