"use client";
import { useState } from "react";
import clsx from "clsx";

export default function PopUpNotification() {
  const [open, setOpen] = useState(true);



  return (
    <div
      className={clsx(
        open ? "fixed" : "hidden",
        "top-14 right-5 w-60 sm:w-80 h-24 border rounded-xl border-(--dim-grey)/30 p-3 text-xs font-light shadow-xl/20 inset-shadow-2xs flex justify-start items-start backdrop-blur-xs border-r-white/30 border-l-white/30",
      )}
    >
      <span className="flex justify-center items-center gap-2">
        <span className="border-4 rounded-full border-(--sunflower-gold)" />
        this will be the pop-up notification that wil no longer exist after 5
        seconds.
        {/*  create a component for this and set it to "use client" to apply the duration */}
      </span>
    </div>
  );
}