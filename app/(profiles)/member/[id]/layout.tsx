import React from "react";
import Sidenav from "@/components/members/sidenav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oppa Fitness Gym",
  description: "Gym dashboard showing the overview of everything about the gym",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen w-full">
      <div className="fixed top-0 left-0 z-10 h-screen w-40 xl:w-45 shrink-0 py-1 hidden lg:block">
        <Sidenav />
      </div>
      <section className="flex-1 py-5 px-10 lg:ml-40 xl:ml-45">
        {children}
      </section>
    </main>
  );
}
