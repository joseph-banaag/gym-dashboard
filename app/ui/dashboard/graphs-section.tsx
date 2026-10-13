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

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [open]);

  const CurrentChart = CHARTS[range];

  return (
    <section className="mt-12 py-3 px-5 sm:px-12 grid grid-cols-3 xl:grid-cols-5 gap-5">
      {/* right side */}
      <div className="col-span-3 p-3 rounded-lg bg-carbon-overlay">
        <div className="flex justify-between items-start shrink-0">
          <div>
            <h3 className="text-md">Attendance rhythm</h3>
            <span className="text-[11px] font-normal">Daily check-ins: </span>
          </div>
          {/* add select option here... */}
          <div ref={ref} className="relative flex flex-col gap-1">
            {/*  this is the button version of the dropdown menu */}
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="listbox"
              onClick={() => setOpen((prev) => !prev)}
              className="border z-50 flex justify-between items-center gap-2 py-1 px-2 rounded-lg border-dim-grey-overlay cursor-pointer"
            >
              <span className="text-[11px] font-light">{value}</span>
              <ChevronDoubleDownIcon
                className={clsx(
                  open ? "animate-bounce" : "animate-none",
                  "w-4 h-4 text-(--dark-goldenrod)",
                )}
              />
            </button>

            <div
              role="listbox"
              className={clsx(
                "absolute z-50 top-8 left-0 text-[11px] px-2 py-3 gap-2 flex-col items-center" +
                  " bg-carbon-overlay backdrop-blur-3xl inset-shadow-slate-500 shadow-xl/30" +
                  " inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-dim-grey-overlay",
                open ? "flex" : "hidden",
              )}
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