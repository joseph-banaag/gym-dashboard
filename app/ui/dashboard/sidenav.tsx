import Link from "next/link";
import BusinessLogo from "./biz-logo";
import Navlinks from "./navlinks";
import UserLoggedIn from "@/app/ui/dashboard/user";

export default function SideNav() {
  return (
    <nav className="h-screen w-50  p-1 hidden md:flex flex-col  justify-between  rounded-r-xl inset-shadow-sm/20  inset-shadow-slate-500 shadow-xl/40 bg-(--carbon-black)/10 dark:bg-(--carbon-black)/40">
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
