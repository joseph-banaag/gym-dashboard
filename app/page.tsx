"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Rates from "@/app/lib/landing/plan-cards";
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
      setScrolled(window.scrollY > 80);
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
          {/*
          todo: set top bar to fixed and then change the floating style when scrolled
          */}
          <div className="fixed top-1 left-0 w-full">
            <div
              className={clsx(
                "flex h-18 items-center justify-between px-8 lg:px-20" +
                  " 2xl:px-40",
                scrolled
                  ? "w-17/18 sm:w-3/4 mx-auto rounded-xl border border-(--dim-grey)/30 bg-carbon-black/50" +
                      " backdrop-blur-sm" +
                      " shadow-lg/20 inset-shadow-off-white/30"
                  : "w-full",
              )}
            >
              <div className="text-sm font-bold flex gap-1 text-shadow-xs">
                <span className="text-(--primary-scarlet)">Oppa</span>
                <span className="dark:text-off-white text-foreground">
                  Fitness Gym
                </span>
              </div>
              <div className="flex gap-1 sm:gap-2 text-[12px] font-light">
                <span>Admin login</span>
                <span>|</span>
                <span>Members login</span>
              </div>
            </div>
          </div>
          <div className="h-10 lg:h-14 xl:h-34 w-full" />

          <div className="w-full flex flex-col xl:flex-row pt-24 pb-8 sm:py-24">
            <div className="w-full flex flex-col justify-center gap-8 px-1 lg:px-12 mb-5 lg:mb-15 sm:py-12">
              <div className="flex flex-col">
                <h1
                  className={`${shockSurgent.className} shrink font-semibold text-5xl sm:text-7xl text-(--orange) text-shadow-sm/10 text-nowrap`}
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
                  <strong className="text-(--orange) text-[16px] font-bold">
                    weekly program{" "}
                  </strong>
                  and{" "}
                  <strong className="text-(--orange) text-[16px] font-bold">
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
                className="w-full xl:w-screen h-80 md:h-120 object-cover rounded-2xl shadow-lg/30 shadow-inset-gray-200"
              />
            </div>
          </div>

          <div className="w-full text-carbon-black/70 dark:text-foreground p-4 mb-20 md:mb-40">
            <div className="flex flex-col mb-4">
              <h2 className="text-[24px] sm:text-[30px] font-bold">
                Our rates
              </h2>
              <p className="text-[12px] font-ligth px-3">
                Flexible rates for all
              </p>
            </div>
            <Rates />
          </div>
        </div>

        <hr className="border-t border-(--dim-grey)/70 w-14/15 mx-auto" />

        <div className="w-full px-25 pt-5 flex flex-col lg:flex-row gap-15 justify-center items-center pb-10 sm:pb-5">
          <Image
            src="/oppa.png"
            alt="Oppa fitness gym logo"
            loading="eager"
            width={150}
            height={150}
          />
          <div className="w-full flex flex-col lg:flex-row gap-3 justify-between items-center">
            <div className="flex flex-col justify-center items-center text-nowrap">
              <span className="text-[14px] font-normal text-carbon-black/70 dark:text-off-white mb-3">
                Operating hours:
              </span>
              <span className="text-[12px] font-light text-carbon-black/70 dark:text-off-white/70">
                Monday - Saturday, 9:00 AM to 9:00 PM
              </span>
              <span className="text-[12px] font-light text-carbon-black/70 dark:text-off-white/70">
                Sunday, 1:00 PM to 9:00 PM
              </span>
            </div>
            <div className="px-3 py-1 rounded-full bg-off-white shadow-lg/30 backdrop-blur-xs mt-5">
              <Link
                target="_blank"
                href="https://www.facebook.com/oppafitnessgym/"
                className="text-[#1877F2] font-bold"
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