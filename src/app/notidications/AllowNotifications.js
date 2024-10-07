"use client";

import React from "react";
import useUser from "../../hooks/useUser";
import { Button } from "@nextui-org/react";
import urlBase64ToUint8Array from "./urlBase64";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { subscribe } from "../../service/webpush.service";
import toast from "react-hot-toast";
import AppModal from "../../components/modal/AppModal";
import { useStore } from "../../zustand/store";

export default function AllowNotifications() {
  const { openEnabled, setOPenModal } = useStore((state) => state);

  const user = useUser();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: subscribe,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-user"]);
    },
  });

  async function subscribeToPush() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
        ),
      });
      await mutateAsync({ sub: JSON.stringify(sub) });
      setOPenModal();
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.error?.message || "something went wrong !"
      );
    }
  }

  return (
    <AppModal isOpen={openEnabled} onClose={() => setOPenModal()}>
      <div className="w-full flex flex-col gap-y-3">
        <h1 className="text-xl font-semibold">Enable Notifications</h1>
        <p>
          {`we'd`} like to keep you updated with important news, alerts, and special
          offers. To do this, we need your permission to send notifications. You
          can manage or turn them off anytime in your browser settings.
        </p>
        <div className="flex items-center w-full gap-x-4 pt-4">
          <Button onClick={setOPenModal} fullWidth variant="bordered" color="secondary">
            Denied
          </Button>
          <Button
            isLoading={isPending}
            onClick={subscribeToPush}
            fullWidth
            isDisabled={user?.is_subscribe}
            color="secondary"
          >
            Enable
          </Button>
        </div>
      </div>
    </AppModal>
  );
}
