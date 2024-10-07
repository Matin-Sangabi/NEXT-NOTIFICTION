import React from "react";
import ReactQuery from "./ReactQuery";
import NextUi from "./NextUi";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./AuthContext";

export default function Providers({ children }) {
  return (
    <ReactQuery>
      <AuthProvider>
        <NextUi>{children}</NextUi>
        <Toaster />
      </AuthProvider>
    </ReactQuery>
  );
}
