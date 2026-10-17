import localFont from "next/font/local";
import Image from "next/image";
import Rates from "@/app/lib/landing/plan-cards";
import Link from "next/link";

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
  return (
    <>
      <div className="text-foreground min-w-97 w-screen h-screen px-8 2xl:px-32 background-blob">
        <div className="w-full">
          {/*
          todo: set top bar to fixed and then change the floating style when scrolled
          */}
          <div className="flex w-full h-24 items-center justify-start sm:justify-between px-2 sm:px-12">
            <div className="text-sm font-bold flex gap-1 text-shadow-xs">
              <span className="text-(--primary-scarlet)">Oppa</span>
              <span className="dark:text-off-white text-foreground">
                Fitness Gym
              </span>
            </div>
            <div className="hidden sm:flex gap-2 text-[12px] font-light">
              <span>Admin login</span>
              <span>|</span>
              <span>Members login</span>
            </div>
          </div>

          <div className="w-full flex flex-col xl:flex-row py-8 sm:py-24">
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

            <div className="flex sm:hidden gap-2 text-[12px] font-light mb-6 mt-5">
              <span>Admin login</span>
              <span>|</span>
              <span>Members login</span>
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

          <div className="w-full text-carbon-black/70 dark:text-foreground border rounded-xl border-(--dim-grey)/30 p-4 shadow-lg/10 mb-40">
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

        <div className="w-full px-25 pt-5 flex gap-15">
          <Image
            src="/oppa.png"
            alt="Oppa fitness gym logo"
            loading="eager"
            width={150}
            height={150}
          />
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col">
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
            <Link
              target="_blank"
              href="https://www.facebook.com/oppafitnessgym/"
            >
              facebook
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}