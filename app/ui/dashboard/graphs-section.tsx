"use client";

import React, { useState } from "react";
import ExerciseToday from "@/app/ui/dashboard/exercise-today";
import { ChartRange, RANGE_OPTIONS } from "@/app/lib/dashboard/charts";
import LastWeekChart from "@/app/lib/dashboard/biweek-chart";
import MonthlyChart from "@/app/lib/dashboard/year-chart";
import ThisMonthChart from "@/app/lib/dashboard/month-chart";
import ThisWeekChart from "@/app/lib/dashboard/week-chart";

const CHARTS: Record<ChartRange, React.ComponentType> = {
  "this-week": ThisWeekChart,
  "last-week": LastWeekChart,
  "this-month": ThisMonthChart,
  "this-year": MonthlyChart,
};

export default function GraphsSection() {
  const [range, setRange] = useState<ChartRange>("this-week");
  const CurrentChart = CHARTS[range];

  return (
    <section className="mt-12 py-3 px-5 sm:px-12 grid grid-col-3 xl:grid-cols-5 gap-5 dark:text-foreground text-(--carbon-black)/90">
      {/* right side */}
      <div className="col-span-3 p-3 rounded-lg bg-(--carbon-black)/10 dark:bg-(--carbon-black)/40">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-md">Attendance rhythm</h3>
            <span className="text-[11px] font-normal">Daily check-ins: </span>
          </div>
          {/* add select option here... */}
          <select
            value={range}
            onChange={(e) => setRange(e.target.value as ChartRange)}
            className="border flex justify-between items-center gap-2 py-1 px-2 rounded-lg border-(--dim-grey) text-[11px] font-light"
          >
            {RANGE_OPTIONS.map((o) => (
              <option
                key={o.value}
                value={o.value}
                className="w-32 py-1 px-2 border border-(--off-white)/30 dark:border-(--dim-grey)/30 rounded-md text-[11px] sm:font-light text-(--off-white)/90 bg-(--carbon-black)/30 shadow-lg/20"
              >
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4">
          <div className="w-full h-full flex justify-center items-center border border-(--dim-grey)/40 rounded-lg">
            <div className="px-5 h-30 flex flex-col justify-center items-center">
              {/* change width and height of this section to follow the parent component dimension*/}
              <CurrentChart />
            </div>
          </div>
        </div>
      </div>

      {/* left side */}
      <div className="col-span-3 xl:col-span-2 p-3 rounded-lg bg-(--carbon-black)/10 dark:bg-(--carbon-black)/40">
        <ExerciseToday />
      </div>
    </section>
  );
}