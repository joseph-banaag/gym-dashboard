import { getSession } from "@/lib/sessions/member-session";
import Link from "next/link";
import { logout } from "@/app/actions/login/user-actions";
import {
  CalendarDateRangeIcon,
  ClipboardDocumentCheckIcon,
  HomeIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";

export default async function Sidenav() {
  const session = await getSession();
  if (!session) return null;

  const { memberId } = session;

  const memberNav = [
    {
      name: "Main",
      route: `/member/${memberId}`,
      icon: HomeIcon,
    },
    {
      name: "Workout plans",
      route: `/member/${memberId}/workouts`,
      icon: ClipboardDocumentCheckIcon,
    },
    {
      name: "Gym Attendance",
      route: `/member/${memberId}/attendance`,
      icon: CalendarDateRangeIcon,
    },
    {
      name: "See Progress",
      route: `/member/${memberId}/progress`,
      icon: PresentationChartLineIcon,
    },
  ];

  return (
    <nav className="flex flex-col h-full rounded-r-xl inset-shadow-sm/20  inset-shadow-slate-500 shadow-xl/20 bg-carbon-overlay p-3 justify-between">
      <div className="flex flex-col gap-2">
        {memberNav.map((nav) => {
          const LinkIcon = nav.icon;

          return (
            <Link
              key={nav.name}
              href={nav.route}
              className="border p-2 sm:p-3 flex justify-start items-center gap-2 border-dim-grey-overlay rounded-lg w-full hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[13px] font-light hover:font-medium text-foreground"
            >
              <LinkIcon className="w-4 h-4" />
              <span className="text-[11px]">{nav.name}</span>
            </Link>
          );
        })}
      </div>
      <form action={logout}>
        <button
          type="submit"
          className="border p-2 sm:p-3 flex items-center gap-2 border-dim-grey-overlay rounded-lg w-full hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[13px] font-light hover:font-medium text-foreground"
        >
          <ArrowLeftStartOnRectangleIcon className="w-4 h-4" />
          <span className="text-[11px]">Log out</span>
        </button>
      </form>
    </nav>
  );
}
