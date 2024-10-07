import { Avatar, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="w-full flex items-center justify-between ">
        <Link href="/">
          <Image
          radius="none"
            src="/images/logo/7533464-removebg-preview.png"
            width={45}
            height={40}
          />
        </Link>
        <Avatar size="sm" />
      </nav>
    </header>
  );
}
