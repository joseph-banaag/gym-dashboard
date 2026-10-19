"use client";

import { useEffect, useMemo, useState } from "react";

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
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="flex gap-2 text-xs font-light">
      <span className="text-nowrap hidden sm:block">{formattedDate}</span>
      <span className="hidden sm:block">|</span>
      <span className="text-nowrap hidden md:block">{time}</span>
    </span>
  );
}