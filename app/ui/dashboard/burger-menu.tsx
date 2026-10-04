"use client";
import { useState } from "react";
import styles from "./button.module.css";
import { NavlinksMobile } from "./navlinks";
import "@/app/globals.css";
import UserLoggedIn from "./user";
import { BusinessLogoMobile } from "./biz-logo";
import Link from "next/link";
import clsx from "clsx";

export default function BurgerMenu() {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChecked = () => setChecked(!checked);

  return (
    <>
      <span
        className={clsx(
          `top-12 bottom-0 right-0 left-0 backdrop-blur-[2px] z-1`,
          checked ? " absolute " : "hidden",
        )}
        onClick={handleChecked}
      />
      <label htmlFor="hamburger-menu" id={styles.hamburgerMenu}>
        <input
          type="checkbox"
          id="hamburger-menu"
          checked={checked}
          onChange={handleChecked}
          className="shadow-xl/20"
        />
      </label>
      <nav
        className={clsx(
          `left-0 top-12 bottom-0 w-45 sm:w-50 z-2 inset-shadow-sm/20 shadow-lg/20 bg-(--carbon-black) p-3 gap-2`,
          checked ? "absolute" : "hidden",
        )}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="h-full">
            <NavlinksMobile />
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
    </>
  );
}
