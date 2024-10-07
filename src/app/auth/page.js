"use client";
import { Spinner } from "@nextui-org/react";

import React from "react";

export default function Page() {
  React.useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }, []);

  return (
    <div className="w-full flex h-full flex-col gap-y-2 items-center justify-center">
      <Spinner label="Please Wait ..." />
    </div>
  );
}
