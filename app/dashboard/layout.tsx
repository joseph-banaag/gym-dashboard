import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import "@/app/globals.css";
import DateToday from "@/app/lib/dateToday";
import TopBarBreadcrumbs from "../ui/dashboard/topbarbreadcrmbs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="basis-[10vw] ">
        <SideNav />
      </div>
      <div className="basis-[90vw]">
        {/* top bar */}
        <div className="h-12  p-2 shadow-xl/10 flex items-center justify-between">
          <span className="text-xs font-light text-shadow-lg/20 flex ">
            <span>
              <TopBarBreadcrumbs />
            </span>
          </span>
          <div className="flex">
            <DateToday />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

// breadcrumbs, Oppa Fitness Gym / active page should be bold
