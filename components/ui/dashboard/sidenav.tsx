import Link from "next/link";
import BusinessLogo from "./biz-logo";
import NavRoutes from "./nav-routes";
import UserLoggedIn from "./user";

export default function SideNav() {
  return (
    <nav className="sticky top-0 left-0 w-60 h-dvh hidden lg:block pb-2">
      <div className="flex flex-col h-full justify-between rounded-r-xl inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 bg-carbon-overlay mt-1  p-2">
        <Link href="/dashboard">
          <BusinessLogo />
        </Link>
        <div className="basis-[80vh] flex flex-col gap-2 pt-5 px-3">
          <NavRoutes />
        </div>
        <UserLoggedIn />
      </div>
    </nav>
  );
}
