"use client";

import React, { useEffect, useState } from "react";

import BurgerMenu from "@/app/ui/dashboard/burger-menu";
import TopBarBreadcrumbs from "@/app/ui/dashboard/topbarbreadcrmbs";
import DateToday from "@/app/lib/date-today";
import Notification from "@/app/ui/dashboard/notif";

export default function Topbar() {
  const [scrollY, setScrollY] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY >= 240);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrollY
          ? "backdrop-blur-sm w-105 mx-auto transition delay-100 duration-300 ease-in-out"
          : "w-full"
      } sticky top-1 h-12  p-2 flex items-center justify-between  rounded-xl inset-shadow-slate-500 shadow-xl/40 bg-(--carbon-black)/10 dark:bg-(--carbon-black)/40 `}
    >
      <div className="flex justify-center items-center gap-2 md:gap-3">
        <div className="w-5 flex lg:hidden justify-center items-center">
          <BurgerMenu />
        </div>
        <div className="text-xs font-light flex">
          <TopBarBreadcrumbs />
        </div>
      </div>
      <div className="flex gap-2 items-center ">
        <DateToday />
        <Notification />
      </div>
    </div>
  );
}