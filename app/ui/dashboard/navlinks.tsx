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
              `h-11 text-xs font-medium flex gap-2 rounded-xl justify-center items-center p-3 shadow-xl/20 hover:shadow-xl/80 text-shadow-lg/20 transition delay-75 duration-200 ease-in-out  hover:bg-radial-[at_75%_90%] from-(--crimson-red)/50 via-(--crimson-red)/75 to-(--primary-scarlet) to-95% hover:text-(--off-white)  hover:border hover:border-(--primary-scarlet)`,
              pathname === link.href
                ? "bg-(--deep-crimson) text-(--azure-mist) border border-(--primary-scarlet)/80 shadow-xl/80 bg-radial-[at_75%_90%] from-(--crimson-red)/75 via-(--crimson-red)/50 to-(--primary-scarlet) to-95%"
                : "bg-(--deep-crimson) text-(--off-white)/60",
            )}
          >
            {/*
      
            
hover:bg-(--deep-crimson)
            */}
            <LinkIcon className="w-5 shadow-xl/30" />
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

export const NavlinksMobile = () => {
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
              `h-11 text-xs font-medium flex my-3 rounded-xl justify-center items-center p-2 shadow-xl/20 hover:shadow-xl/80 text-shadow-lg/20 transition delay-75 duration-200 ease-in-out  hover:bg-radial-[at_75%_90%] from-(--crimson-red)/50 via-(--crimson-red)/75 to-(--primary-scarlet) to-95% hover:text-(--off-white)  hover:border hover:border-(--primary-scarlet)`,
              pathname === link.href
                ? "bg-(--deep-crimson) text-(--azure-mist) border border-(--primary-scarlet)/80 shadow-xl/80 bg-radial-[at_75%_90%] from-(--crimson-red)/75 via-(--crimson-red)/50 to-(--primary-scarlet) to-95%"
                : "bg-(--deep-crimson) text-(--off-white)/60",
            )}
          >
            {/*
      
            
hover:bg-(--deep-crimson)
            */}
            <LinkIcon className="w-5 shadow-xl/30" />
            {link.name}
          </Link>
        );
      })}
    </>
  );
};
