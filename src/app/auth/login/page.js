import Link from 'next/link';
import React from 'react'
import LoginForm from './loginForm';

export default function Login() {
  return (
    <div className="w-full flex h-full items-center justify-center">
      <div className="w-full flex flex-col gap-y-4">
        <h1 className="text-3xl font-semibold">
          Hey 👋 <br />
          Login Now !
        </h1>
        <div className="w-full flex items-center gap-x-2 text-xl mt-10">
          <span className="text-primary">I Am Older User /</span>
          <Link href="/auth/register" className="text-black font-semibold">Create New</Link>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
