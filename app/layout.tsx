import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Public_Sans, Raleway } from "next/font/google";
import { cn } from "@/lib/utils";

const ralewayHeading = Raleway({subsets:['latin'],variable:'--font-heading'});

const publicSans = Public_Sans({subsets:['latin'],variable:'--font-sans'});

const adwaitaSans = localFont({
  src: [
    {
      path: "../public/fonts/adwaita-sans-latin-100-normal.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/adwaita-sans-latin-200-normal.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/adwaita-sans-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/adwaita-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/adwaita-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/adwaita-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/adwaita-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-adwaita",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oppa Fitness Gym | Dashboard",
  description: "Gym dashboard showing the overview of everything about the gym",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("antialiased", adwaitaSans.variable, "font-sans", publicSans.variable, ralewayHeading.variable)}>
      <body className="m-0 min-h-dvh">{children}</body>
    </html>
  );
}