import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const adwaitaSans = localFont({
  src: [
    {
      path: "../fonts/adwaita-sans-latin-100-normal.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/adwaita-sans-latin-200-normal.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/adwaita-sans-latin-300-normal.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/adwaita-sans-latin-400-normal.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/adwaita-sans-latin-500-normal.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/adwaita-sans-latin-600-normal.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/adwaita-sans-latin-700-normal.woff",
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
    <html lang="en" className={`${adwaitaSans.variable} antialiased`}>
      <body className="m-0 min-h-dvh">{children}</body>
    </html>
  );
}
