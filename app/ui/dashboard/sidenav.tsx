import Link from "next/link";
import BusinessLogo from "./biz-logo";
import Navlinks from "./navlinks";
import UserLoggedIn from "@/app/ui/dashboard/user";

export default function SideNav() {
  return (
    <nav className="h-screen w-60  p-1 hidden md:flex flex-col  justify-between bg-(--off-white)  dark:bg-(--carbon-black) shadow-xl/30">
      <Link href="/">
        <BusinessLogo />
      </Link>
      <div className="basis-[80vh]  flex  flex-col gap-2 pt-5 px-3">
        <Navlinks />
      </div>
      <UserLoggedIn />
    </nav>
  );
}
