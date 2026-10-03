import { BellIcon } from "@heroicons/react/24/outline";
import "@/app/globals.css";

export default function Notification() {
  return (
    <span className="w-5 relative">
      <BellIcon />
      <span className="absolute  border-4 border-(--harvest-gold) rounded-lg top-0  right-0 animate-ping" />
      <span className="absolute  border-4 border-(--harvest-gold) rounded-lg top-0  right-0" />
    </span>
  );
}
