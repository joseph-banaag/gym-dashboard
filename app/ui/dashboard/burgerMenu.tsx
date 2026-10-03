"use client";
import { useState } from "react";
import styles from "./button.module.css";
import { NavlinksMobile } from "./navlinks";
import "@/app/globals.css";
import UserLoggedIn from "./user";
import { BusinessLogoMobile } from "./businessLogo";

export default function BurgerMenu() {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChecked = () => {
    setChecked(!checked);
    console.log("The status of the button: ", checked);
  };

  return (
    <>
      <span
        className={`${checked ? " absolute top-12 bottom-0 right-0 left-0 backdrop-blur-xs z-1" : "hidden"}`}
      />
      <label
        htmlFor="hamburger-menu"
        id={styles.hamburgerMenu}
        className="shadow-lg"
      >
        <input
          type="checkbox"
          id="hamburger-menu"
          checked={checked}
          onChange={handleChecked}
        />
      </label>
      <nav
        className={`${checked ? "absolute left-0 top-12 bottom-0 w-40 z-2 inset-shadow-sm/20 shadow-lg/20 bg-background p-3 gap-2" : "hidden"}`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="h-full">
            <NavlinksMobile />
          </div>
          <div className="flex  flex-col justify-center items-center gap-2">
            <BusinessLogoMobile />
            <div className="flex justify-center items-center p-3">
              <UserLoggedIn />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
