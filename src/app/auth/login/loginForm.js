"use client";

import React from "react";
import * as yup from "yup";
import FormProvider from "../../providers/FormProvider";
import AppInput from "../../../components/Forms/AppInput";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../service/auth.service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useUser from "../../../hooks/useUser";
import Cookies from "js-cookie";

export default function LoginForm() {
  const [showPass, setShowPass] = React.useState(false);

  const defaultValues = React.useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(12).max(14).required(),
  });

  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });

  const { handleSubmit } = methods;

  const { mutateAsync, isPending } = useMutation({ mutationFn: login });

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await mutateAsync(data);
      toast.success(res?.message);
      console.log(res.access);
      Cookies.set("access_token", res.access, { expires: 1 });
      router.push("/auth");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.error?.message || "Something went wrong !"
      );
    }
  };

  return (
    <div className="w-full mt-4">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-y-4">
          <AppInput name={"email"} type="email" label={"Email"} />
          <AppInput
            name={"password"}
            type={showPass ? "text" : "password"}
            label={"Password"}
            endContent={
              <Button
                onClick={() => setShowPass(!showPass)}
                isIconOnly
                size="sm"
                variant="light"
                radius="full"
              >
                <Icon
                  icon={
                    showPass
                      ? "solar:eye-bold-duotone"
                      : "solar:eye-closed-broken"
                  }
                  width="20"
                />
              </Button>
            }
          />
          <div className="w-full mt-8">
            <Button
              isLoading={isPending}
              size="lg"
              fullWidth
              radius="md"
              color="secondary"
              type="submit"
            >
              Login
            </Button>
          </div>
        </div>
      </FormProvider>
    </div>
  );
}
