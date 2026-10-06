import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import "@/app/globals.css";
import DateToday from "@/app/lib/date-today";
import TopBarBreadcrumbs from "../ui/dashboard/topbarbreadcrmbs";
import Notification from "@/app/ui/dashboard/notif";
import BurgerMenu from "../ui/dashboard/burger-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row min-w-[320px]">
      {/* side navbar */}
      <SideNav />
      <div className="w-full px-3 pt-1">
        {/* top bar with notif and time */}
        <div className="h-12 w-full  p-2 flex items-center justify-between  bg-(--carbon-black)/10 dark:bg-(--carbon-black)/40 rounded-xl inset-shadow-slate-500 shadow-xl/40">
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

        {/* children */}
        {children}
      </div>
    </div>
  );
}
