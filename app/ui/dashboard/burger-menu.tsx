"use client";
import { useEffect, useState } from "react";
import styles from "./button.module.css";
import "@/app/globals.css";
import clsx from "clsx";
import NavRoutes from "@/app/ui/dashboard/nav-routes";
import Link from "next/link";
import { BusinessLogoMobile } from "@/app/ui/dashboard/biz-logo";
import UserLoggedIn from "@/app/ui/dashboard/user";

export default function BurgerMenu() {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChecked = () => setChecked(!checked);

  useEffect(() => {
    if (!checked) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setChecked(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [checked]);

  return (
    <div>
      {/* overlay */}
      <div
        className={`${checked ? "absolute" : "hidden"} top-13 left-0 right-0 bottom-0 w-screen h-screen -translate-x-11 z-5`}
        onClick={handleChecked}
      />

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
          `z-99 top-13 left-0 bottom-0 w-45 h-[calc(100vh-70px)] sm:w-50 p-3 gap-20 bg-(--off-white)/90 dark:bg-(--carbon-black)/80 backdrop-blur-3xl inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-xl border-2 border-r-0 border-l-0 dark:border-(--dim-grey)/50 border-white transition-all delay-150 duration-500 ease-in-out -translate-x-8`,
          checked ? "absolute" : "hidden",
        )}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="h-full flex flex-col gap-2 p-2">
            <NavRoutes />
          </div>
          <div className="flex  flex-col justify-center items-center gap-2">
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

// inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/40 border border-b-white  dark:border-b-(--dim-grey) border-l-0 dark:border-t-(--dim-grey) border-t-white border-r-0 transition-all duration-500 ease-in-out backdrop-blur-2xl