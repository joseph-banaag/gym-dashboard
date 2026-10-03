"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function TopBarBreadcrumbs() {
  const pathname = usePathname(); // e.g. "/blog/react/hooks"
  const segments = pathname.split("/").filter(Boolean); // ["blog", "react", "hooks"]

  return (
    <nav className="flex gap-2">
      <Link 
      href="/"
      className="text-foreground/70"
      >home</Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/"); // "/blog", "/blog/react", ...
        const isLast = index === segments.length - 1;

        return (
          <span key={href} className="flex gap-1 sm:gap-2">
            <span>/</span>
            <Link
              href={href}
              className={clsx(`text-foreground`, isLast ? "text-foreground font-bold" : "text-foreground/70")}
            >
              {decodeURIComponent(segment)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
