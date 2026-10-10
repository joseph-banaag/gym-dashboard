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
    <div className="absolute bottom-0 left-0 w-60 flex flex-col bg-(--off-white)/90 dark:bg-(--carbon-black)/70 backdrop-blur-3xl inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-xl border-2 border-r-0 border-l-0 dark:border-(--dim-grey)/50 border-white transition delay-150 duration-500 ease-in-out pt-3 pb-16 px-4 gap-2">
      {profileSettings.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.route}
            className="border p-3 flex items-center gap-2 border-white/40 dark:border-(--dim-grey)/30 rounded-lg w-full hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[13px] font-light hover:font-medium"
          >
            <span className="w-5 h-5">
              <LinkIcon />
            </span>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}