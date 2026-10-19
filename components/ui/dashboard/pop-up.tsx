"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function PopUpNotification() {
  const withNotification = true;
  const [open, setOpen] = useState(withNotification);

  useEffect(() => {
    if (!open) return;

    const timerId = setTimeout(() => setOpen(false), 5000);

    return () => clearTimeout(timerId);
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={clsx(
        "fixed z-100 top-14 right-5 w-60 sm:w-80 h-24 border rounded-xl border-(--dim-grey)/30 p-3 text-xs font-light" +
          " shadow-xl/20 inset-shadow-2xs flex justify-start items-start backdrop-blur-xs border-r-white/30" +
          " border-l-white/30 transition-opacity duration-500 ease-in-out",
        open ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <span className="flex justify-center items-center gap-2">
        <span className="border-4 rounded-full border-(--dark-goldenrod)" />
        this will be the pop-up notification that will no longer exist after 5
        seconds.
      </span>
    </div>
  );
}