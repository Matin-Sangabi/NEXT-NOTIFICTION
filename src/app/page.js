import PushNotificationManager from "./notidications/manager";
import InstallPrompt from "./notidications/install";
import { getQueryClient } from "./get-queryclient";
import { usersOptions } from "../options/userLists";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import UsersLists from "./usersLists";

export default function Home() {

  const queryClient = getQueryClient()
  queryClient.prefetchQuery(usersOptions);

  return (
    <div className="w-full flex flex-grow h-full flex-col">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="w-full flex-col flex flex-grow">
          <PushNotificationManager />
          <UsersLists />
        </div>
        <InstallPrompt />
      </HydrationBoundary>
    </div>
  );
}
