import { JetBrains_Mono } from "next/font/google";

export const textColor =
  "text-carbon-black/70 dark:text-off-white/70 text-[11px]";

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-jetbrains-mono",
  display: "swap",
});
