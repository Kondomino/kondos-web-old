'use client'
import { Description, Dialog, DialogPanel, DialogTitle } from "@/app/headlessui";
import { useState } from 'react'

export function ExampleModal() {
  // The open/closed state lives outside of the `Dialog` and is managed by you
  let [isOpen, setIsOpen] = useState(true)

  return (
    /*
      Pass `isOpen` to the `open` prop, and use `onClose` to set
      the state back to `false` when the user clicks outside of
      the dialog or presses the escape key.
    */
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogPanel>
        <DialogTitle>Deactivate account</DialogTitle>
        <Description>This will permanently deactivate your account</Description>
        <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>

        {/*
          You can render additional buttons to dismiss your
          dialog by setting `isOpen` to `false`.
        */}
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </DialogPanel>
    </Dialog>
  )
}