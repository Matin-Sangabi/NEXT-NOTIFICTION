import React from "react";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

export default function AppModal({
  isOpen = false,
  children,
  onClose,
  title,
  ...other
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      {...other}
      placement="center"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          },
          exit: {
            y: 100,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          },
        },
      }}
      classNames={{
        base: `bg-white mx-1 my-0    p-0 pb-4 border-primary`,
        body: "",
        wrapper: "!p-2 ",
        closeButton:
          "w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 my-2 mx-2",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="">
              {title}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
