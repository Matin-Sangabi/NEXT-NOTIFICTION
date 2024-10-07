"use client";

import React from "react";
import * as yup from "yup";
import FormProvider from "../../providers/FormProvider";
import AppInput from "../../../components/Forms/AppInput";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function RegisterForm() {
  const [showPass, setShowPass] = React.useState(false);

  const defaultValues = React.useMemo(
    () => ({
      name: "",
      email: "",
      password: "",
    }),
    []
  );

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(12).max(14).required(),
  });

  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });

  const { handleSubmit } = methods;

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full mt-4">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-y-4">
          <AppInput name={"name"} type="text" label={"Name"} />
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
