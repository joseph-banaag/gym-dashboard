import React from "react";
import Sidenav from "@/components/members/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-row w-screen h-screen dark:bg-accent dark:text-accent-foreground">
      <Sidenav />
      <div className="w-full lg:w-16/18">{children}</div>
    </main>
  );
}
