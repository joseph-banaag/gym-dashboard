export type ChartRange = "this-week" | "last-week" | "this-month" | "this-year";

export const RANGE_OPTIONS: { value: ChartRange; label: string }[] = [
  { value: "this-week", label: "This Week" },
  { value: "last-week", label: "Last Week" },
  { value: "this-month", label: "This Month" },
  { value: "this-year", label: "Monthly" },
];