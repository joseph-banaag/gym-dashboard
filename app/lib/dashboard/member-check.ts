import { getDaysInMonth } from "@/app/lib/dashboard/current-month";

const daysInMonth = getDaysInMonth();

export type MembersType = {
  name: string;
  plan: string;
  visit: number;
  currentMonth: number;
};

export const membersToCheck = [
  {
    name: "John Smith",
    plan: "monthly",
    visit: 8,
    currentMonth: daysInMonth,
  },
  {
    name: "Theo Martin",
    plan: "monthly",
    visit: 11,
    currentMonth: daysInMonth,
  },
  {
    name: "Marcus Reed",
    plan: "daily",
    visit: 5,
    currentMonth: daysInMonth,
  },
  {
    name: "Avery Brooks",
    plan: "bi-weekly",
    visit: 5,
    currentMonth: daysInMonth,
  },
];

//list of plans, monthly, bi-weekly, daily