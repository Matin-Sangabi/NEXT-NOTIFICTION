import React from "react";
import PropTypes from "prop-types";

import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@nextui-org/react";

AppInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default function AppInput({ name, label, type = "text", ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...other}
          label={label}
          {...field}
          isInvalid={!!error}
          errorMessage={error?.message}
          type={type}
        />
      )}
    />
  );
}
