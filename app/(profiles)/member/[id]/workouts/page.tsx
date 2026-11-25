import { redirect } from "next/navigation";
import { getSession } from "@/lib/sessions/member-session";
import { Metadata } from "next";
import { jetbrainsMono, textColor } from "@/lib/text-helper";
import { MoveRight, Dumbbell } from "lucide-react";
import ProgramProgress from "@/components/ui/member/workout-plans/program-progress";
import { getMember } from "@/lib/dals/member";
import WorkoutPlansCompleted from "@/components/ui/member/workout-plans/workout-plans-completed";
import Ring from "@/components/ui/member/ring";
import SessionCounter from "@/components/ui/member/workout-plans/session-counter";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const member = await getMember();
  const name = member?.username ?? "OFG";

  const username = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `${username} | Workout plans`,
  };
}

// cw stands for current week

const cwProgram = 1;
const cwTarget = 8;
const currentSession = 3;
const targetSession = 32;
const programName = "Strength and conditioning";
const todayWorkout = "Upper body strength";
const exerciseQty = "5 exercises";
const exerciseDuration = "45 minutes";
const coachName = "Doks";

export default async function Page() {
  const session = await getSession();
  if (!session) redirect("/login/member");
  const member = await getMember();
  const id = member?._id;

  return (
    <main className="w-full h-full flex flex-col gap-5">
      <div className="flex flex-col gap-1 mb-5">
        <h3 className={`${textColor}`}>TRAINING</h3>
        <h1 className="text-3xl">Workout plans</h1>
      </div>
      <div className="flex flex-col md:flex-row -translate-x-6 md:translate-x-0 gap-2 justify-start md:justify-between items-start md:items-center px-6">
        <span className={`${textColor}`}>
          Your current program, weekly schedule, and recent sessions.
        </span>
        <div className="flex justify-center items-center gap-2 px-2 py-1 border rounded-xl text-[11px] xs:text-[14px] border-(--dim-grey)/70 inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/10">
          <span>Browse plans</span>
          <MoveRight className="w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* element 0 */}
        <div className="relative col-span-1 lg:col-span-3 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10 overflow-hidden flex justify-between flex-col gap-2">
          <Ring />
          <div className="flex justify-between">
            <div>
              <span className="text-[11px] xs:text-[14px] text-(--harvest-gold) gap-1 flex items-center">
                <span className="border-4 rounded-full border-green-500" />
                ACTIVE PROGRAM
              </span>
            </div>
            <div
              className={`${jetbrainsMono.className} ${textColor} dark:dim-grey-overlay font-semibold backdrop-blur-xs  px-2 py-1 border rounded-lg border-(--dim-grey)/30 flex gap-1 items-center justify-center`}
            >
              <span>WEEK</span>
              <strong>{cwProgram}</strong>
              <span> of {cwTarget}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className={`${jetbrainsMono.className} text-3xl font-bold`}>
              {programName}
            </h1>
            <span className="text-[11px] xs:text-[14px] text-(--sunflower-gold)">
              A balanced program focused on progressive strength and consistency
            </span>
          </div>
          <div className="relative flex flex-col gap-2">
            <ProgramProgress
              currentSession={currentSession}
              targetSession={targetSession}
            />
            <div className="absolute right-0 top-0">
              <WorkoutPlansCompleted program={cwProgram} target={cwTarget} />
            </div>
          </div>
          <SessionCounter
            currentSession={currentSession}
            targetSession={targetSession}
          />
        </div>

        {/* element 1 */}
        <div className="col-span-1 lg:col-span-2 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10 flex flex-col gap-3">
          <div className={`${textColor} flex justify-between`}>
            <div>
              <span>TODAY&apos;S PROGRAM</span>
            </div>
            <div className="p-1 rounded-sm bg-(--dim-grey)/20">
              <Dumbbell className="w-4 h-4" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className={`${jetbrainsMono.className} text-3xl font-bold`}>
              {todayWorkout}
            </h1>
            <div className={textColor}>
              <span>{exerciseQty}</span>
              {" · "}
              <span>{exerciseDuration}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <hr className="border border-t-0 border-(--dim-grey)/50" />
            <div className={`${textColor} flex flex-row justify-between`}>
              <span>Coach: {coachName}</span>
              <div className="flex gap-1">
                <span>Week {cwProgram}</span>
                {" · "}
                <span>Day {currentSession}</span>
              </div>
            </div>
            <hr className="border border-t-0 border-(--dim-grey)/50" />
          </div>

          <Link
            href={`/member/${id}/start-workout`}
            className="bg-(--harvest-gold) backdrop-blur-xs border border-(--sunflower-gold)/70 rounded-2xl px-2 py-1 flex justify-center items-center text-[12px] text-[#5C4033] font-semibold gap-2 cursor-pointer inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/10 md:w-50 w-full"
          >
            <strong className="text-nowrap">Start workout</strong>
            <MoveRight className="w-3 animate-bounce-x" />
          </Link>
        </div>
      </div>
    </main>
  );
}
