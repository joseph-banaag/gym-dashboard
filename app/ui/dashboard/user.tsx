import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function UserLoggedIn() {
  return (
    <Link
      href="/"
      className="flex justify-center items-center gap-2 p-2 bg-(--orange) text-(--carbon-black) rounded-md"
    >
      <UserCircleIcon className="w-6" />
      <p className="text-xs font-light ">Doks Banaag</p>
    </Link>
  );
}
