import React from "react";
import SideNav from "@/components/ui/dashboard/sidenav";
import "@/app/globals.css";
import Topbar from "@/components/ui/dashboard/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-row w-full h-full">
      <SideNav />
      <section className="w-screen">
        <Topbar />
        {children}
      </section>
    </main>
  );
}
