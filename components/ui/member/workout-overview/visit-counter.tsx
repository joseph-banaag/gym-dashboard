import { VisitStatusProps } from "@/components/ui/member/workout-overview/visits-status";
import { textColor } from "@/lib/text-helper";

export default function VisitCounter({ visit, tVisit }: VisitStatusProps) {
  const visitCount: number = tVisit - visit;
  let visitCountMessage: string;

  switch (true) {
    case visitCount > 1:
      visitCountMessage = "more visits to hit your goal.";
      break;
    case visitCount === 1:
      visitCountMessage = "more visit to hit your goal.";
      break;
    default:
      visitCountMessage = "Waiting for your next visit.";
  }

  return (
    <>
      <p className={textColor}>
        {visitCount} {visitCountMessage}
      </p>
    </>
  );
}
