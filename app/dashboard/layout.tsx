import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import "@/app/globals.css";
import Topbar from "@/app/ui/dashboard/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-row">
      <SideNav />
      <section className="w-screen">
        <Topbar />
        {children}
      </section>
    </main>
  );
}