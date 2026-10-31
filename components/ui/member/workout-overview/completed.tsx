import { PartyPopper } from "lucide-react";
import { VisitStatusProps } from "@/components/ui/member/workout-overview/visits-status";

export default function Completed({ visit, tVisit }: VisitStatusProps) {
  const percentage = (visit / tVisit) * 100;

  return (
    <div
      className={
        percentage === 100
          ? "flex gap-1 justify-center items-center text-(--sunflower-gold)"
          : "hidden"
      }
    >
      <strong className="text-[11px]">Congratulations!</strong>
      <PartyPopper className="w-4 h-4 mb-2" />
    </div>
  );
}
