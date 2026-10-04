import {
  Cog8ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  BellAlertIcon,
  NumberedListIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const profileSettings = [
  {
    name: "Profile Settings",
    route: "/user-profile",
    icon: Cog8ToothIcon,
  },
  {
    name: "Notification",
    route: "/dashboard/notification",
    icon: BellAlertIcon,
  },
  {
    name: "Todo",
    route: "/dashboard/todo",
    icon: NumberedListIcon,
  },
  {
    name: "Logout",
    route: "/",
    icon: ArrowLeftStartOnRectangleIcon,
  },
];

export default function UserProfile() {
  return (
    <div className="absolute bottom-1 left-1 h-74 w-55 border border-(--dim-grey)/20 rounded-2xl flex  flex-col items-start backdrop-blur-sm px-3 py-6 gap-2">
      {profileSettings.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.route}
            className="border  p-3 flex items-center gap-2 border-(--dim-grey)/30 rounded-lg w-full"
          >
            <span className="w-5 h-5">
              <LinkIcon />
            </span>
            <span className="text-[13px] font-light">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
