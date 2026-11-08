import { ProgramProps } from "@/components/ui/member/workout-plans/program-progress";
import { BicepsFlexed } from "lucide-react";
export default function WorkoutPlansCompleted({
  program,
  target,
}: ProgramProps) {
  const percentage = (program / target) * 100;

  return (
    <div
      className={
        percentage === 100
          ? "flex gap-1 justify-center items-center text-(--harvest-gold)"
          : "hidden"
      }
    >
      <strong className="text-[11px] xs:text-[14px]">
        You are ready for the next program!
      </strong>
      <BicepsFlexed className="size-4" />
    </div>
  );
}
