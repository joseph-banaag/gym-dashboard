"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { links } from "@/app/lib/nav-links";

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
              "h-11 text-[13px]  font-medium flex gap-2 justify-center items-center p-3 hover:shadow-xl/30" +
                " transition delay-75 duration-200 ease-in-out  hover:text-(--azure-mist)/80 border border-(--dim-grey)/60 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:bg-(--deep-crimson)",
              pathname === link.href
                ? "bg-(--deep-crimson) border border-(--primary-scarlet)/80 shadow-xl/80 bg-radial-[at_75%_90%] from-(--crimson-red)/75 via-(--crimson-red)/50 to-(--primary-scarlet) to-95% text-(--off-white)"
                : "text-foreground",
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