"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./button.module.css";
import "@/app/globals.css";
import clsx from "clsx";
import NavRoutes from "@/app/ui/dashboard/nav-routes";
import Link from "next/link";
import { BusinessLogoMobile } from "@/app/ui/dashboard/biz-logo";
import UserLoggedIn from "@/app/ui/dashboard/user";

export default function BurgerMenu() {
  const [checked, setChecked] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChecked = () => setChecked(!checked);

  useEffect(() => {
    if (!checked) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setChecked(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setChecked(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [checked]);

  return (
    <div ref={ref} className="relative">
      {/* button */}
      <label htmlFor="hamburger-menu" id={styles.hamburgerMenu}>
        <input
          type="checkbox"
          id="hamburger-menu"
          checked={checked}
          onChange={handleChecked}
          className="shadow-xl/20 border border-(--harvest-gold)"
        />
      </label>

      {/* nav menu */}
      <nav
        className={clsx(
          checked ? "absolute" : "hidden",
          "top-8 left-0 bottom-0 w-45 h-[calc(100vh-70px)] sm:w-50 gap-20 bg-(--off-white)/90" +
            " dark:bg-(--carbon-black)/90 backdrop-blur-3xl inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20" +
            " rounded-xl border-2 border-r-0 border-l-0 dark:border-(--dim-grey)/50 border-white transition-all delay-150 duration-500 ease-in-out -translate-x-8",
        )}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="h-full flex flex-col gap-2 p-5">
            <NavRoutes />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Link href="/">
              <BusinessLogoMobile />
            </Link>
            <div className="flex justify-center items-center w-full">
              <UserLoggedIn />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}