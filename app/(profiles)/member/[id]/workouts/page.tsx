import { redirect } from "next/navigation";
import { getSession } from "@/lib/sessions/member-session";
import { Metadata } from "next";
import { jetbrainsMono, textColor } from "@/lib/text-helper";
import { MoveRight } from "lucide-react";
import ProgramProgress from "@/components/ui/member/workout-plans/program-progress";
import { getMember } from "@/lib/dals/member";
import WorkoutPlansCompleted from "@/components/ui/member/workout-plans/workout-plans-completed";
import Ring from "@/components/ui/member/ring";
import SessionCounter from "@/components/ui/member/workout-plans/session-counter";

export async function generateMetadata(): Promise<Metadata> {
  const member = await getMember();
  const name = member?.username ?? "OFG";

  const username = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `${username} | Workout plans`,
  };
}

const cwProgram = 1;
const cwTarget = 8;
const programName = "Strength and conditioning";

export default async function Page() {
  const session = await getSession();
  if (!session) redirect("/login/member");

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
            <ProgramProgress program={cwProgram} target={cwTarget} />
            <div className="absolute right-0 top-0">
              <WorkoutPlansCompleted program={cwProgram} target={cwTarget} />
            </div>
          </div>
          <SessionCounter />
        </div>

        {/* element 1 */}
        <div className="col-span-1 lg:col-span-2 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10 flex flex-col justify-between">
          this is the element on the left
        </div>
      </div>
    </main>
  );
}
