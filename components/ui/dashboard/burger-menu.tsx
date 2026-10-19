"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./button.module.css";
import "@/app/globals.css";
import { BusinessLogoMobile } from "@/components/ui/dashboard/biz-logo";
import UserLoggedIn from "@/components/ui/dashboard/user";
import Link from "next/link";
import NavRoutes from "@/components/ui/dashboard/nav-routes";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

export default function BurgerMenu() {
  const [checked, setChecked] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [prevPathname, setPrePathname] = useState<string>(pathname);

  if (pathname !== prevPathname) {
    setPrePathname(pathname);
    setChecked(false);
  }

  const handleChecked = () => setChecked(!checked);

  useEffect(() => {
    if (!checked) return;

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideButton = buttonRef.current?.contains(target);
      const insideNav = navRef.current?.contains(target);
      const insideProfileMenu = profileMenuRef.current?.contains(target); // for profile settings menu

      console.log("Inside button: ", insideButton);

      if (!insideButton && !insideNav && !insideProfileMenu) setChecked(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setChecked(false);
    };

    const mq = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setChecked(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    mq.addEventListener("change", handleChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
      mq.removeEventListener("change", handleChange);
    };
  }, [checked]);

  return (
    <>
      {/* button */}
      <div ref={buttonRef} className="relative">
        <label htmlFor="hamburger-menu" id={styles.hamburgerMenu}>
          <input
            type="checkbox"
            id="hamburger-menu"
            checked={checked}
            onChange={handleChecked}
            className="shadow-xl/20 border border-(--harvest-gold)"
          />
        </label>
      </div>
      {checked &&
        createPortal(
          <nav
            ref={navRef}
            className={clsx(
              checked ? "fixed" : "hidden",
              "top-14 left-3 bottom-0 w-35 sm:w-45 h-[calc(100vh-70px)] sm:w-50 gap-20 backdrop-blur-sm shadow-xl/30" +
                " inset-shadow-sm/20" +
                " rounded-xl border-2 border-r-0 border-l-0 border-dim-grey-overlay ",
            )}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="h-full flex flex-col gap-2 px-1 py-3 sm:p-5">
                <NavRoutes />
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <Link href="/public">
                  <BusinessLogoMobile />
                </Link>
                <div className="flex justify-center items-center w-full">
                  <UserLoggedIn portalRef={profileMenuRef} />
                </div>
              </div>
            </div>
          </nav>,
          document.body,
        )}
    </>
  );
}