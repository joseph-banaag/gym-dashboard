import Image from "next/image";
import Navlinks from "./navlinks";
import UserLoggedIn from "@/app/ui/dashboard/user";

export default function SideNav() {
  return (
    <nav className="h-screen p-1 flex flex-col  justify-between bg-(--off-white)  dark:bg-(--carbon-black) shadow-xl">
      <div className="basis-[10vh]  p-2 flex flex-col justify-center items-center ">
        <Image
          loading="eager"
          src="/oppa.png"
          width={75}
          height={75}
          className="hidden md:block"
          alt="Oppa fitness gym logo"
        />
        <span className="text-xs font-medium text-foreground dark:text-(--off-white) text-shadow-lg">
          Oppa Fitness Gym
        </span>
      </div>
      <div className="basis-[80vh]  flex  flex-col gap-2 pt-5 px-3 ">
        <Navlinks />
      </div>
      <UserLoggedIn />
    </nav>
  );
}
