"use client";

import { useMemo } from "react";

const getFormattedDate = () => {
  const today = new Date();

  // format to match: Monday Oct 3, 2026
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const parts = formatter.formatToParts(today);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  const day = parts.find((p) => p.type === "day")?.value ?? "";
  const year = parts.find((p) => p.type === "year")?.value ?? "";

  return `${weekday} ${month} ${day}, ${year}`;
};

export default function DateToday() {
  const formattedDate = useMemo(() => getFormattedDate(), []);

  return (
    <span className="text-xs font-light text-shadow-lg/20">
      {formattedDate}
    </span>
  );
}
