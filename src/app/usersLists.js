"use client";

import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { usersOptions } from "../options/userLists";
import { Button, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import AppModal from "../components/modal/AppModal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AppInput from "../components/Forms/AppInput";
import FormProvider from "./providers/FormProvider";
import { sendNotification } from "../service/webpush.service";
import useUser from "../hooks/useUser";

export default function UsersLists() {

  const { data, error } = useSuspenseQuery(usersOptions);
  console.log(error);




  const [openModal, setOpenModal] = React.useState(null);

  const defaultValues = React.useMemo(
    () => ({
      title: "test title",
      message: "this is test message",
    }),
    []
  );

  const schema = yup.object().shape({
    title: yup.string().required(),
    message: yup.string().required(),
  });

  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });

  const { handleSubmit } = methods;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: sendNotification,
  });

  const onSubmit = async (data) => {
    try {
      const formData = { ...data, _id: openModal?._id };
      const res = await mutateAsync(formData);
      console.log(res);
      setOpenModal(null);
    } catch (error) {
      toast.error(
        error?.response?.data?.error?.message || "Something went wrong !"
      );
      setOpenModal(null);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-x-3 gap-y-5">
        {data &&
          data?.length > 0 &&
          data?.map((item) => (
            <div
              key={item?._id}
              className="rounded-xl bg-[#a6a99e]/20 shadow-sm p-3 flex flex-col gap-p-y-4"
            >
              <span className="font-semibold">{item?.name}</span>
              <span className="text-black/60 text-sm truncate block">
                {item?.email}
              </span>
              <div className="pt-4 w-full">
                <Tooltip content="send notification" color="secondary">
                  <Button
                    size="sm"
                    isIconOnly
                    variant="faded"
                    color="secondary"
                    onClick={() => setOpenModal(item)}
                  >
                    <Icon icon="lets-icons:send-duotone" width="23" />
                  </Button>
                </Tooltip>
              </div>
            </div>
          ))}
      </div>
      <AppModal isOpen={Boolean(openModal)} onClose={() => setOpenModal(false)}>
        <div className="flex  flex-col gap-y-4 ">
          <h1 className="text-xl">
            Send Notification to{" "}
            <strong className="capitalize">{openModal?.name}</strong>
          </h1>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <AppInput name={"title"} label={"Title"} />
              <AppInput name={"message"} label={"Message"} />

              <Button isLoading={isPending} color="secondary" type="submit">
                Send
                <Icon icon="lets-icons:send-duotone" width="23" />
              </Button>
            </div>
          </FormProvider>
        </div>
      </AppModal>
    </>
  );
}
