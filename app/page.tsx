import localFont from "next/font/local";
import Image from "next/image";

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
      <div className="text-foreground w-screen h-screen px-32 background-blob">
        <div className="w-full h-full">
          <div className=" flex w-full h-24 items-center justify-between px-12">
            <div className="text-sm font-bold flex gap-1 text-shadow-xs">
              <span className="text-(--deep-crimson)">Oppa</span>
              <span className="dark:text-off-white text-foreground">
                Fitness Gym
              </span>
            </div>
            <div className="flex gap-2 text-[12px] font-light">
              <span>Admin login</span>
              <span>|</span>
              <span>Members login</span>
            </div>
          </div>
          <div className="w-full  flex flex-col lg:flex-row items-center justify-between py-25">
            <div className=" w-full flex flex-col gap-5">
              <div className="flex flex-row gap-5">
                <span
                  className={`${shockSurgent.className} font-semibold text-6xl text-(--orange) text-shadow-sm/10`}
                >
                  Train hard,
                </span>
                <span className="text-carbon-black/70 dark:text-foreground">
                  {" "}
                  it&apos;s a lifestyle
                </span>
              </div>
              <div className="text-sm font-light tracking-wider dark:text-foreground text-gray-700">
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
            <div className=" w-full flex justify-center items-center">
              <Image
                src="/hero.png"
                alt="Hero"
                loading="eager"
                width={650}
                height={650}
                className="rounded-2xl shadow-lg/30 shadow-inset-gray-200 "
              />
            </div>
          </div>
          <div className="h-1/8 w-full "></div>
        </div>
      </div>
    </>
  );
}