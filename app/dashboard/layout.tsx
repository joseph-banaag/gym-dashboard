import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import "@/app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="basis-[10vw] ">
        <SideNav />
      </div>
      <div className="basis-[90vw] p-5 ">{children}</div>
    </div>
  );
}
