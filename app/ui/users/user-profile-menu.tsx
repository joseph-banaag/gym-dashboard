import {
  ArrowLeftStartOnRectangleIcon,
  BellAlertIcon,
  Cog8ToothIcon,
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

export default function UserProfileMenu() {
  return (
    <div
      className="absolute bottom-1 left-1 w-60 flex flex-col  border border-t-(--dim-grey) border-b-(--dim-grey) border-r-0 border-l-0 rounded-2xl px-3 pt-6 pb-15 gap-2 bg-(--carbon-black)/40 backdrop-blur-xs"
    >

      {profileSettings.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.route}
            className="border p-3 flex items-center gap-2 border-white/40 dark:border-(--dim-grey)/30 rounded-lg w-full hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out text-(--azure-mist)/80 inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[13px] font-light hover:font-medium"
          >
            <span className="w-5 h-5">
              <LinkIcon/>
            </span>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}