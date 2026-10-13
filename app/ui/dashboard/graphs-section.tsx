"use client";

import React, { useEffect, useRef, useState } from "react";
import ExerciseToday from "@/app/ui/dashboard/exercise-today";
import { ChartRange, RANGE_OPTIONS } from "@/app/lib/dashboard/charts";
import LastWeekChart from "@/app/lib/dashboard/biweek-chart";
import MonthlyChart from "@/app/lib/dashboard/year-chart";
import ThisMonthChart from "@/app/lib/dashboard/month-chart";
import ThisWeekChart from "@/app/lib/dashboard/week-chart";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import { createPortal } from "react-dom";

const CHARTS: Record<ChartRange, React.ComponentType> = {
  "this-week": ThisWeekChart,
  "last-week": LastWeekChart,
  "this-month": ThisMonthChart,
  "this-year": MonthlyChart,
};

export default function GraphsSection() {
  const [range, setRange] = useState<ChartRange>("this-week");
  const [value, setValue] = useState<string>("This Week");
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideTrigger = buttonRef.current?.contains(target);
      const insideMenu = menuRef.current?.contains(target);
      if (!insideTrigger && !insideMenu) setOpen(false);
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const handleScroll = (e: Event) => {
      // this will ignore scrolling inside the menu itself.
      if (menuRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  const CurrentChart = CHARTS[range];

  const toggle = () => {
    if (!open && buttonRef.current) {
      const r = buttonRef.current.getBoundingClientRect();
      setPos({ top: r.bottom + 4, left: r.left });
    }
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <section className="relative mt-12 py-3 px-5 sm:px-12 grid grid-cols-3 xl:grid-cols-5 gap-5">
      {/* right side */}
      <div className="relative col-span-3 p-3 rounded-lg bg-carbon-overlay">
        <div className="flex justify-between items-start shrink-0">
          <div>
            <h3 className="text-md">Attendance rhythm</h3>
            <span className="text-[11px] font-normal">Daily check-ins: </span>
          </div>
          {/* add select option here... */}
          <div className="relative">
            {/*  this is the button version of the dropdown menu */}
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={open}
              aria-haspopup="listbox"
              onClick={toggle}
              className="border flex justify-between items-center gap-2 py-1 px-2 rounded-lg border-dim-grey-overlay cursor-pointer"
            >
              <span className="text-[11px] font-light">{value}</span>
              <ChevronDoubleDownIcon
                className={clsx(
                  open ? "animate-bounce" : "animate-none",
                  "w-4 h-4 text-(--dark-goldenrod)",
                )}
              />
            </button>
            <div className="relative">
              {open &&
                pos &&
                createPortal(
                  <div
                    ref={menuRef}
                    role="listbox"
                    style={{ top: pos.top, left: pos.left }}
                    className="fixed z-300 text-[11px] px-2 py-3 gap-2 flex flex-col items-center bg-carbon-overlay backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-dim-grey-overlay"
                  >
                    {RANGE_OPTIONS.map((o) => (
                      <button
                        key={o.value}
                        type="button"
                        role="option"
                        aria-selected={o.label === value}
                        onClick={() => {
                          setOpen(false);
                          setRange(o.value as ChartRange);
                          setValue(o.label);
                        }}
                        className="w-24 py-1 text-[11px] sm:font-light cursor-pointer border-white/40 dark:border-dim-grey/30 rounded-md hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 hover:font-medium text-foreground"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>,
                  document.body,
                )}
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 min-w-0 p-4">
          <div className="relative size-full border border-(--dim-grey)/40 rounded-lg overflow-hidden p-3">
            <CurrentChart />
          </div>
        </div>
      </div>

      {/* left side */}
      <div className="col-span-3 xl:col-span-2 p-3 rounded-lg bg-carbon-overlay">
        <ExerciseToday />
      </div>
    </section>
  );
}