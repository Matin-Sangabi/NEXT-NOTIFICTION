"use client";

import React, { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../service/auth.service";
import { Spinner } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const initialState = {
  isLogin: false,
};

export const AuthContext = createContext({ ...initialState });

export default function AuthProvider({ children }) {
  const pathname = usePathname();

  const { data, status, error } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (status === "pending") {
    return (
      <div className="w-full flex items-center justify-center bg-primary h-full min-h-screen !text-black">
        <Spinner
          color="secondary"
          label="Please Wait"
          classNames={{ label: "text-black" }}
        />
      </div>
    );
  }
  if (status === "error") {
    if (error?.response?.status === 401) {
      if (pathname.includes("/auth")) {
        console.log(error)
      } else {
        window.location.href = "/auth/login";
        
      }
    }
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
