import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import "@/app/globals.css";
import DateToday from "@/app/lib/dateToday";
import TopBarBreadcrumbs from "../ui/dashboard/topbarbreadcrmbs";
import Notification from "@/app/ui/dashboard/notif";
import BurgerMenu from "../ui/dashboard/burgerMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      {/* side navbar */}
      <SideNav />
      <div className="w-screen">
        {/* top bar with notif and time */}
        <div className="h-12 w-full  p-2 shadow-lg flex items-center justify-between">
          <div className="flex justify-center items-center gap-2 md:gap-3">
            <div className="w-5 flex md:hidden justify-center items-center">
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
