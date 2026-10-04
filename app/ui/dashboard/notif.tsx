import { BellIcon } from "@heroicons/react/24/outline";
import "@/app/globals.css";
import { clsx } from "clsx";

export default function Notification() {
  const hasNotif = true;
  // const hasNotif = false;
  return (
    <span className="w-5 relative">
      <BellIcon />
      <span className={clsx(`${hasNotif ? "block" : "hidden"}`)}>
        <span className="absolute  border-4 border-(--harvest-gold) rounded-lg top-0  right-0 animate-ping" />
        <span className="absolute  border-4 border-(--harvest-gold) rounded-lg top-0  right-0" />
      </span>
    </span>
  );
}
