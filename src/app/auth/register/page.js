import Link from "next/link";
import React from "react";
import RegisterForm from "./registerForm";

export default function Login() {
  return (
    <div className="w-full flex h-full items-center justify-center">
      <div className="w-full flex flex-col gap-y-4">
        <h1 className="text-3xl font-semibold">
          Hey 👋 <br />
          Register Now !
        </h1>
        <div className="w-full flex items-center gap-x-2 text-xl mt-10">
          <span className="text-primary">I Am  User /</span>
          <Link href="/auth/login" className="text-black font-semibold">
            Login Now
          </Link>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
