"use client";

import { Avatar, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import useUser from "../../hooks/useUser";
import { Icon } from "@iconify/react";
import { useStore } from "../../zustand/store";

export default function Header() {
  const user = useUser();

  const { setOPenModal } = useStore((state) => state);

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
        <div className="flex items-center gap-x-1">
          {user && (
            <Button
              onClick={() => setOPenModal()}
              isIconOnly
              radius="full"
              variant="light"
            >
              <Icon icon="solar:bell-bold-duotone" width="24" />
            </Button>
          )}
          <Avatar size="sm" />
        </div>
      </nav>
    </header>
  );
}
