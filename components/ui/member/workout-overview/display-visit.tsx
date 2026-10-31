import { VisitStatusProps } from "@/components/ui/member/workout-overview/visits-status";
import { textColor } from "@/lib/text-helper";

export default function DisplayVisit({ visit, tVisit }: VisitStatusProps) {
  return (
    <>
      <strong>{visit}</strong>
      <strong className={textColor}>/ {tVisit} visits</strong>
    </>
  );
}
