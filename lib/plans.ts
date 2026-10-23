export const PLANS = [
  {
    value: "daily",
    name: "Daily",
  },
  {
    value: "2-week",
    name: "2-week",
  },
  {
    value: "monthly",
    name: "Monthly",
  },
];

export const INCLUDE_PLANS: readonly string[] = PLANS.map(({ value }) => value);

export type planValue = (typeof PLANS)[number]["value"];