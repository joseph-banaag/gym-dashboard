import {
  Cog8ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  BellAlertIcon,
  NumberedListIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function UserProfile() {
  return (
    <div className="absolute bottom-1 left-1 h-74 w-55 border border-(--dim-grey)/20 rounded-2xl flex  flex-col items-start backdrop-blur-sm text-shadow-lg/30 px-3 py-6 gap-2">
      <Link
        href="/user-profile"
        className="border  p-3 flex items-center gap-2 border-(--dim-grey)/30 rounded-lg w-full"
      >
        <span className="w-5 h-5">
          <Cog8ToothIcon />
        </span>
        <span className="text-xs font-light">Profile settings</span>
      </Link>
      <Link
        href="/dashboard/notification"
        className="border  p-3 flex items-center gap-2 border-(--dim-grey)/30 rounded-lg w-full"
      >
        <span className="w-5 h-5">
          <BellAlertIcon />
        </span>
        <span className="text-xs font-light">Notification</span>
      </Link>
      <Link
        href="/dashboard/todo"
        className="border  p-3 flex items-center gap-2 border-(--dim-grey)/30 rounded-lg w-full"
      >
        <span className="w-5 h-5">
          <NumberedListIcon />
        </span>
        <span className="text-xs font-light">Todo</span>
      </Link>
      <Link
        href="/"
        className="border  p-3 flex items-center gap-2 border-(--dim-grey)/30 rounded-lg w-full"
      >
        <span className="w-5 h-5">
          <ArrowLeftStartOnRectangleIcon />
        </span>
        <span className="text-xs font-light">Logout</span>
      </Link>
    </div>
  );
}
