import { Calendar } from "lucide-react";
import VisitStatus from "@/components/ui/member/workout-overview/visits-status";
import Completed from "@/components/ui/member/workout-overview/completed";
import VisitCounter from "@/components/ui/member/workout-overview/visit-counter";
import { jetbrainsMono, textColor } from "@/lib/text-helper";
import StreakCounter from "@/components/ui/member/workout-overview/streak-counter";
import ProgressIndicator from "@/components/ui/member/workout-overview/progress-indicator";

const cwVisit: number = 4; //current week visit.
const cwTarget: number = 4; // if no set session it will return 0

export default async function WorkoutOverview() {
  return (
    <div className="grid mg:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
      {/* card 1*/}
      <div className="col-span-1 p-3 rounded-xl bg-carbon-overlay shadow-xl/15 border border-(--dim-grey)/20">
        <div className={`${textColor} flex justify-between items-center mb-2`}>
          <strong>Gym visit this week</strong>
          <div className="p-1 rounded-sm bg-(--dim-grey)/20">
            <Calendar className="w-3 h-3" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className={`${jetbrainsMono.className}`}>
            <strong>{cwVisit}</strong>
            <strong className={textColor}>/ {cwTarget} visits</strong>
          </div>
          <div className="relative flex flex-col">
            <VisitCounter visit={cwVisit} tVisit={cwTarget} />
            <VisitStatus visit={cwVisit} tVisit={cwTarget} />
            <div className="absolute bottom-1 right-0">
              <Completed visit={cwVisit} tVisit={cwTarget} />
            </div>
          </div>
        </div>
      </div>

      {/* card 2 */}
      <StreakCounter />

      {/* card 3 */}
      <ProgressIndicator />
    </div>
  );
}
