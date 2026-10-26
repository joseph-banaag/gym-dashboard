import {
  BellAlertIcon,
  Cog8ToothIcon,
  NumberedListIcon,
} from "@heroicons/react/24/solid";

export const profileSettings = [
  {
    name: "Profile Settings",
    route: "/user-profile-profile",
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
];