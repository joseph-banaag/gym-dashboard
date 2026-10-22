"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Rates from "@/components/landing/plan-cards";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

const shockSurgent = localFont({
  src: [
    {
      path: "../public/fonts/shock-surgent.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Page() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // set the correct initial value on mount (e.g. page refreshed mid-scroll)
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="text-foreground w-full min-h-screen px-8 2xl:px-32 background-blob">
        <div className="w-full">
          <div className="fixed top-1 left-0 w-full">
            <div
              className={clsx(
                "mx-auto flex h-12 items-center justify-between px-4 sm:px-8 lg:px-20 2xl:px-40",
                "border",
                "transition-all duration-300 ease-in-out",
                scrolled
                  ? "w-16/18 sm:w-3/4 rounded-xl border-(--dim-grey)/30 bg-off-white/20 dark:bg-carbon-black/60" +
                      " backdrop-blur-sm shadow-lg/20 px-2 inset-shadow-lg/20 inset-shadow-white"
                  : "w-full rounded-none px-3 border-transparent",
              )}
            >
              <div className="text-[14px] font-bold flex gap-1 text-shadow-xs">
                <span className="text-(--primary-scarlet)">Oppa</span>
                <span className="dark:text-off-white text-foreground">
                  Fitness Gym
                </span>
              </div>
              <div className="flex gap-2 xs:gap-3 text-[10px]  xs:text-[12px]">
                <Link href="/user">Sign in</Link>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col xl:flex-row pt-34 pb-12">
            <div className="w-full flex flex-col justify-center gap-8 px-1 lg:px-12 mb-15 sm:py-12">
              <div className="flex flex-col">
                <h1
                  className={`${shockSurgent.className} shrink font-semibold text-5xl sm:text-7xl text-(--sunflower-gold) text-shadow-sm/10 text-nowrap`}
                >
                  Train hard,
                </h1>
                <h1 className="text-3xl sm:text-5xl text-carbon-black/70 dark:text-foreground">
                  it&apos;s a lifestyle
                </h1>
              </div>
              <div className="text-xs lg:text-sm font-light tracking-wider dark:text-foreground text-gray-700">
                <p className="mb-1 mt-2">
                  Improve yourself and enhance your strength.
                </p>
                <p>
                  By using this application, you can manage your{" "}
                  <strong className="text-(--sunflower-gold) text-[16px] font-bold">
                    weekly program{" "}
                  </strong>
                  and{" "}
                  <strong className="text-(--sunflower-gold) text-[16px] font-bold">
                    track your progress.
                  </strong>
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <Image
                src="/hero.png"
                alt="Hero"
                loading="eager"
                width={570}
                height={570}
                className="w-full xl:w-screen h-80 md:h-120 object-cover rounded-2xl shadow-lg/30"
              />
            </div>
          </div>

          <div className="w-full text-carbon-black/70 dark:text-foreground mb-20 md:mb-40">
            <div className="flex flex-col mb-4">
              <h2 className="text-[24px] sm:text-[30px] font-bold">
                Our rates
              </h2>
              <p className="text-[12px] font-ligth px-3">
                Flexible rates for every-Juan:
              </p>
            </div>
            <Rates />
          </div>
        </div>

        <hr className="border-t border-(--dim-grey)/70 w-14/15 mx-auto" />

        <div className="w-full px-25 pt-5 flex flex-col lg:flex-row gap-15 justify-center items-center pb-10 sm:pb-5">
          <div className="w-28 h-28">
            <Image
              src="/oppa.png"
              alt="Oppa fitness gym logo"
              loading="eager"
              width={150}
              height={150}
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-3 justify-between items-center">
            <div className="flex flex-col justify-center items-center text-nowrap">
              <span className="text-[14px] font-semibold text-foreground dark:text-off-white mb-3">
                Operating hours:
              </span>
              <span className="text-[11px] text-carbon-black/60 dark:text-off-white/70">
                Monday - Saturday, 9:00 AM to 9:00 PM
              </span>
              <span className="text-[11px] text-carbon-black/60 dark:text-off-white/70">
                Sunday, 1:00 PM to 9:00 PM
              </span>
            </div>
            <div className="px-3 py-1 rounded-full bg-off-white shadow-lg/20 backdrop-blur-xs mt-5 inset-shadow-xs inset-shadow-carbon-overlay flex justify-center items-center">
              <Link
                target="_blank"
                href="https://www.facebook.com/oppafitnessgym/"
                className="text-[12px] text-[#1877F2] font-bold"
              >
                facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}