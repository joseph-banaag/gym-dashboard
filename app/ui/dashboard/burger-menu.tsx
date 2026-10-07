"use client";
import {useEffect, useState} from "react";
import styles from "./button.module.css";
import Navlinks from "./navlinks";
import "@/app/globals.css";
import UserLoggedIn from "./user";
import {BusinessLogoMobile} from "./biz-logo";
import Link from "next/link";
import clsx from "clsx";

export default function BurgerMenu() {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChecked = () => setChecked(!checked);

  useEffect(() => {
    if (!checked) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setChecked(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);

  }, [checked])

  return (
    <div>
      {/* overlay */}
      <span
        className={clsx(
          `top-12 bottom-0 right-0 left-0 backdrop-blur-xs z-1 w-screen h-screen`,
          checked ? " absolute " : "hidden",
        )}
        onClick={handleChecked}
      />

      {/* button */}
      <label
        htmlFor="hamburger-menu"
        id={styles.hamburgerMenu}
      >
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
          `left-0 top-12 bottom-0 w-45 h-[calc(100vh-70px)] sm:w-50 z-5 p-3 gap-2 my-2 ms-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/40 bg-(--carbon-black)/10 dark:bg-(--carbon-black)/40 backdrop-blur-[3px] border border-b-white  dark:border-b-(--dim-grey) border-s-0 dark:border-t-(--dim-grey) border-t-white border-r-0 transition-all duration-500 ease-in-out`,
          checked ? "absolute" : "hidden",
        )}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="h-full flex flex-col gap-2 p-2">
            <Navlinks/>
          </div>
          <div className="flex  flex-col justify-center items-center gap-2">
            <Link href="/">
              <BusinessLogoMobile/>
            </Link>
            <div className="flex justify-center items-center w-full">
              <UserLoggedIn/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}