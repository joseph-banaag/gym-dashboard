import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function UserLoggedIn() {
  return (
    <div className="flex flex-col gap-2 p-1">
      <hr className="border rounded-2xl  border-(--orange) dark:border-(--dark-goldenrod) w-full" />
      <Link
        href="/"
        className="flex justify-center items-center gap-2 p-3 text-foreground inset-shadow-sm/20 dark:text-(--off-white) rounded-xl inset-shadow-slate-500 transition delay-75 duration-150 ease-in-out hover:shadow-xl/70"
      >
        <UserCircleIcon className="w-6" />
        <p className="text-xs font-medium ">Doks Banaag</p>
      </Link>
    </div>
  );
}
