import { getMember } from "@/lib/dals/member";
import { MapPin } from "lucide-react";
import { formatDate, getTimeDay } from "@/components/ui/member/current-time";
import Notification from "@/components/ui/member/member-notif";
import { Metadata } from "next";
import WorkoutToday from "@/components/ui/member/workout-today/workout-today";
import WorkoutOverview from "@/components/ui/member/workout-overview/workout-overview";
import { textColor } from "@/lib/text-helper";
import WeekOverview from "@/components/ui/member/week-overview/week-overview";

const username: string = "Doks"; // todo: change the real user's name
export const metadata: Metadata = {
  title: `${username} | Dashboard`,
};

const dateNow = formatDate();

export default async function UsersPage() {
  const member = await getMember();
  const user = member?.username;

  return (
    <main className="w-full h-full flex flex-col">
      <div className="py-2 flex justify-between items-center mb-4 text-carbon-black/80 dark:text-off-white/80">
        <div className="flex gap-2">
          <MapPin className="w-4 h-4 text-()" />
          <span className="text-[11px] flex gap-1">
            <strong className="text-red-500">Oppa</strong>
            <strong>Fitness Gym</strong>
          </span>
        </div>
        <div className="flex gap-2">
          <Notification />
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-8 px-6">
        <h3 className={`${textColor}`}>MEMBER&apos;S DASHBOARD</h3>
        <h1 className="text-3xl">
          {getTimeDay()}, {user}!
        </h1>
      </div>
      <div className="flex flex-col md:flex-row -translate-x-6 md:translate-x-0 gap-2 justify-start md:justify-between items-start md:items-center px-6 mb-3">
        <span className={`${textColor}`}>
          A quick look at your training and what&apos;s next...
        </span>
        <div className="flex justify-center items-center px-2 py-1 border rounded-xl text-[11px] border-(--dim-grey)/70 inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/10">
          {dateNow}
        </div>
      </div>

      {/* workout today */}
      <WorkoutToday />

      {/* workout overview */}
      <WorkoutOverview />

      {/*  week overview */}
      <WeekOverview />
    </main>
  );
}
