"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { links } from "@/lib/dashboard/nav-links";

export default function NavRoutes() {
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
              "font-medium flex gap-2 hover:shadow-xl/30 px-3 py-2" +
                " transition delay-75 duration-200 ease-in-out  hover:text-(--azure-mist)/80 border" +
                " border-(--dim-grey)/60 inset-shadow-sm/20 rounded-lg inset-shadow-slate-500" +
                " shadow-lg/20" +
                " backdrop-blur-xs hover:bg-(--deep-crimson)",
              pathname === link.href
                ? "bg-(--deep-crimson) border border-(--primary-scarlet)/80 shadow-xl/30 bg-radial-[at_75%_90%] from-(--crimson-red)/75 via-(--crimson-red)/50 to-(--primary-scarlet) to-95% text-off-white"
                : "text-foreground",
            )}
          >
            <LinkIcon className="w-4 h-4" />
            <span className="text-[11px]">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
