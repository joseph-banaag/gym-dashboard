import Link from "next/link";
import BusinessLogo from "./biz-logo";
import NavRoutes from "./nav-routes";
import UserLoggedIn from "@/app/ui/dashboard/user";

export default function SideNav() {
  return (
    <nav className="sticky top-0 left-0 w-60 h-dvh hidden lg:flex flex-col  justify-between  rounded-r-xl inset-shadow-sm/20  inset-shadow-slate-500 shadow-xl/20 bg-(--carbon-black)/10 dark:bg-(--carbon-black)/40">
      <Link href="/">
        <BusinessLogo />
      </Link>
      <div className="basis-[80vh]  flex  flex-col gap-2 pt-5 px-3">
        <NavRoutes />
      </div>
      <UserLoggedIn />
    </nav>
  );
}