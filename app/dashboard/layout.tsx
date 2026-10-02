import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2">
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
