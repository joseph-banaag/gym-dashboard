import localFont from "next/font/local";

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
    <div className="dark bg-background text-foreground w-screen h-screen px-32">
      <div className="w-full h-full">
        <div className="border flex w-full h-18 items-center justify-between px-12">
          <span>Oppa Fitness Gym</span>
          <span>Staff Dashboard</span>
        </div>
        <div className="w-full h-5/6 border flex flex-row items-center justify-between">
          <div className="border w-full flex flex-row gap-4 ">
            <span
              className={`${shockSurgent.className} font-semibold text-6xl`}
            >
              Train hard,
            </span>
            <span> it&apos;s a lifestyle</span>
          </div>
          <div className="border w-full">picture</div>
        </div>
      </div>
    </div>
  );
}