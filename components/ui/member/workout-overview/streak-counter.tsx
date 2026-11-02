import { jetbrainsMono, textColor } from "@/lib/text-helper";
import { Flame } from "lucide-react";

export default function StreakCounter() {
  return (
    <div className="col-span-1 p-3 rounded-xl bg-carbon-overlay shadow-xl/15 border border-(--dim-grey)/20 flex flex-col justify-between">
      <div>
        <div className={`${textColor} flex justify-between items-center mb-2`}>
          <strong>Current monthly streak</strong>
          <div className="p-1 rounded-sm bg-(--dim-grey)/20">
            <Flame className="w-3 h-3" />
          </div>
        </div>
        <strong className={jetbrainsMono.className}>6 days</strong>
      </div>
      <span className={textColor}>Your best streak is 12 days.</span>
    </div>
  );
}
