import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import "@/app/globals.css";
import Topbar from "@/app/ui/dashboard/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-row">
      {/* side navbar */}
      <aside className="sticky top-0 left-0 h-screen min-h-120">
        <SideNav />
      </aside>
      <section className="w-screen px-3 pt-1">
        <Topbar />

        {children}
      </section>
    </main>
  );
}