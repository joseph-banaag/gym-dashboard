import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function UserLoggedIn() {
  return (
    <div className="flex flex-col gap-2 p-1 pb-2">
      <hr className="border rounded-2xl  border-(--orange) dark:border-(--dark-goldenrod) w-full" />
      <Link
        href="/"
        className="flex justify-center items-center gap-2 p-3 text-foreground inset-shadow-sm/20 dark:text-(--off-white) rounded-xl inset-shadow-slate-500 transition delay-75 duration-150 ease-in-out hover:shadow-xl/40"
      >
        <UserCircleIcon className="w-7" />
        <div className="flex flex-col justify-start items-start">
          <span className="text-xs font-medium ">Doks Banaag</span>
          <span className="text-[9px] font-light">Admin</span>
        </div>
      </Link>
    </div>
  );
}
