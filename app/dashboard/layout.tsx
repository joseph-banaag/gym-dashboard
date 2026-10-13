import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import "@/app/globals.css";
import Topbar from "@/app/ui/dashboard/topbar";
import PopUpNotification from "@/app/ui/dashboard/pop-up";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-row w-full h-full dark:bg-accent dark:text-accent-foreground">
      <PopUpNotification />
      <SideNav />
      <section className="w-screen">
        <Topbar />
        {children}
      </section>
    </main>
  );
}