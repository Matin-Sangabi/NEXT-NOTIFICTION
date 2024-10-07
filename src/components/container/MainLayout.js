import React from "react";
import Header from "../header/header";

export default function MainLayout({ children }) {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden bg-primary py-0 lg:py-4 ">
      <div className="max-w-md mx-auto w-full bg-white h-full flex flex-col  shadow-md rounded-none lg:rounded-[30px] p-4 lg:p-10 space-y-6">
        <Header />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}
