import React from "react";
import PropTypes from "prop-types";
import { FormProvider as Form } from "react-hook-form";

FormProvider.propTypes = {
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default function FormProvider({ methods, onSubmit, children }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} className="w-full">
        {children}
      </form>
    </Form>
  );
}
