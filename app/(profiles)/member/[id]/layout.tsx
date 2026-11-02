import React from "react";
import Sidenav from "@/components/members/sidenav";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Notification from "@/components/ui/member/member-notif";

export const metadata: Metadata = {
  title: "Oppa Fitness Gym",
  description: "Gym dashboard showing the overview of everything about the gym",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen w-full">
      <div className="fixed top-0 left-0 z-10 h-screen w-45 shrink-0 py-1 hidden lg:block">
        <Sidenav />
      </div>
      <section className="flex-1 py-5 px-10 lg:ml-40 xl:ml-45">
        <div className="sticky top-5 left-0 p-2 rounded-lg backdrop-blur-xs flex justify-between items-center text-carbon-black/80 dark:text-off-white/80 mb-5 inset-shadow-xs inset-shadow-carbon-black/30 shadow-lg/20">
          <div className="flex gap-2">
            <MapPin className="w-4 h-4 text-()" />
            <span className="text-[11px] xs:text-[14px] flex gap-1">
              <strong className="text-red-500">Oppa</strong>
              <strong>Fitness Gym</strong>
            </span>
          </div>
          <div className="flex gap-2">
            <Notification />
          </div>
        </div>
        {children}
      </section>
    </main>
  );
}
