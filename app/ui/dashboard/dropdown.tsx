"use client";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";

const sortList = ["This week", "Last week", "This month", "Monthly"];

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [sortGraph, setSortGraph] = useState("This week");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    // this will wait for the dropdown to open and then will check any outside click to close the menu
    const handleMouseDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    // this will close the menu using escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((prev) => !prev)}
        className="border flex justify-between items-center gap-2 py-1 px-2 rounded-lg border-(--dim-grey) cursor-pointer"
      >
        <span className="text-[11px] font-light">{sortGraph}</span>
        <ChevronDoubleDownIcon
          className={clsx("w-4 h-4", open ? "animate-bounce" : "animate-none")}
        />
      </button>

      <div
        role="listbox"
        className={clsx(
          "absolute z-10 top-8 left-0 border text-[11px] px-1 py-2 gap-1 flex-col items-center rounded-md border-(--dim-grey)/30 bg-(--carbon-black)/40 backdrop-blur-xs",
          open ? "flex" : "hidden",
        )}
      >
        {sortList.map((item) => (
          <button
            key={item}
            type="button"
            role="option"
            aria-selected={item === sortGraph}
            onClick={() => {
              setSortGraph(item);
              setOpen(false);
            }}
            className="w-32 py-1 px-2 border border-(--off-white)/30 dark:border-(--dim-grey)/30 rounded-md text-[11px] sm:font-light text-(--off-white)/90 bg-(--carbon-black)/30 shadow-lg/20"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}