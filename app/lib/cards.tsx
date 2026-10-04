import {
  UserGroupIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ExclamationCircleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import type { ComponentType, SVGProps } from "react";

export interface Card {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  value: string;
  performance: string;
  trajectory: ComponentType<SVGProps<SVGSVGElement>>;
}

export const cards: Card[] = [
  {
    name: "Active members",
    icon: UserGroupIcon,
    value: "1,250",
    performance: "38% vs. last month",
    trajectory: ArrowUpIcon, // find a way to put arrow up if the performance is going up and arrow down if not
  },
  {
    name: "Check-ins today",
    icon: CalendarDaysIcon,
    value: "123",
    performance: "current vs. same day last week",
    trajectory: ArrowUpIcon,
  },
  {
    name: "Monthly revenue",
    icon: ChartBarIcon,
    value: "123,000",
    performance: "current vs. last month",
    trajectory: ArrowUpIcon,
  },
  {
    name: "At-risk members",
    icon: ExclamationCircleIcon,
    value: "0",
    performance: "Follow up if no visit for the last 14+ days",
    trajectory: ArrowDownIcon,
  },
];

// TODO: if trajectory is going up from previous performance provide arrow up icon and arrow down if not.
