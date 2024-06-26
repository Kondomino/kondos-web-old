"use client";

import React, { FC, useState } from "react";
import NcModal from "@/components/NcModal/NcModal";
import Button from "@/components/Button/Button";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";


const ModalKondoInvestments: FC<{plan: string}> = ({plan}) => {

  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <ButtonSecondary onClick={() => setIsOpen(true)}>Quero este</ButtonSecondary>
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
          <DialogTitle className="font-extrabold">{plan}</DialogTitle>
          <Description>Você receberá um email com as informações.</Description>
          <p>A Kondomino se orgulha de ser uma plataforma facilitadora de sonhos.</p>
          <div className="flex gap-4">
            <ButtonPrimary onClick={() => setIsOpen(false)}>OK</ButtonPrimary>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
    </>
  );
};

export default ModalKondoInvestments;
