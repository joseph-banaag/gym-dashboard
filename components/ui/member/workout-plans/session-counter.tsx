import { jetbrainsMono, textColor } from "@/lib/text-helper";

interface ProgramProps {
  currentSession: number;
  targetSession: number;
}

export default function SessionCounter({
  currentSession,
  targetSession,
}: ProgramProps) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col sm:flex-row gap-1">
        <span className={textColor}>
          {currentSession} of <strong>{targetSession}</strong> workouts complete{" "}
          <span>·</span>
        </span>

        <span className={textColor}>Goal: Build strength</span>
      </div>
      <div>
        <span
          className={`${jetbrainsMono.className} ${textColor} dark:dim-grey-overlay font-semibold backdrop-blur-xs  bg-carbon-black/20 px-2 py-1 border rounded-lg border-(--dim-grey)/30 flex gap-1 items-center justify-center`}
        >
          4 sessions / week
        </span>
      </div>
    </div>
  );
}
