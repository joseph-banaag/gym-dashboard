"use client";

import {
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
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

export default function Navlinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `h-11 text-xs font-medium flex gap-2 rounded-xl justify-center items-center p-3  hover:bg-(--deep-crimson) hover:text-(--off-white)`,
              pathname === link.href
                ? "bg-(--deep-crimson) text-(--off-white)"
                : "bg-(--deep-crimson)/50 text-(--off-white)/50",
            )}
          >
            <LinkIcon className="w-5" />
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
