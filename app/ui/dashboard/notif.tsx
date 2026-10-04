import { BellIcon } from "@heroicons/react/24/outline";
import "@/app/globals.css";
import { clsx } from "clsx";
import Link from "next/link";

export default function Notification() {
  const hasNotif = true;
  // const hasNotif = false;
  return (
    <Link
      href={clsx(`${hasNotif ? "/dashboard/notification" : ""}`)}
      className="w-5 relative cursor-pointer"
    >
      <BellIcon />
      <span className={clsx(`${hasNotif ? "block" : "hidden"}`)}>
        <span className="absolute  border-4 border-(--sunflower-gold) rounded-full top-0  right-0 animate-ping" />
        <span className="absolute  border-4 border-(--harvest-gold) rounded-full top-0  right-0" />
      </span>
    </Link>
  );
}
