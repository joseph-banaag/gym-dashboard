import {
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const links = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Classes",
    href: "/dashboard/classes",
    icon: CalendarDaysIcon,
  },
  {
    name: "Members",
    href: "/dashboard/members",
    icon: UserGroupIcon,
  },
  {
    name: "Revenue",
    href: "/dashboard/revenue",
    icon: PresentationChartBarIcon,
  },
];