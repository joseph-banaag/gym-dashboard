import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import "@/app/globals.css";
import Topbar from "@/app/ui/dashboard/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-row w-full h-full">
      <div className="fixed top-14 right-5 w-60 sm:w-80 h-24 border rounded-xl border-(--dim-grey)/30 p-3 text-xs font-light shadow-xl/20 inset-shadow-2xs flex justify-start items-start backdrop-blur-xs border-r-white/30 border-l-white/30 ">
        <span className="flex justify-center items-center gap-2">
          <span className="border-4 rounded-full border-(--sunflower-gold)" />
          this will be the pop-up notification that wil no longer exist after 5
          seconds.
          {/*  create a component for this and set it to "use client" to apply the duration */}
        </span>
      </div>
      <SideNav />
      <section className="w-screen">
        <Topbar />
        {children}
      </section>
    </main>
  );
}