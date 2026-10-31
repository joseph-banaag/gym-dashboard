export interface VisitStatusProps {
  visit: number;
  tVisit: number;
}

const barColor = {
  one: "w-[16%] border-(--visit-one)",
  two: "w-[32%] border-(--visit-two)",
  three: "w-[48%] border-(--visit-three)",
  four: "w-[64%] border-(--visit-four)",
  five: "w-[80%] border-(--visit-five)",
  six: "w-[100%] border-(--visit-six)",
};

export default function VisitStatus({ visit, tVisit }: VisitStatusProps) {
  const percentage = (visit / tVisit) * 100;

  let bar: string;

  switch (true) {
    case percentage > 85:
      bar = barColor.six;
      break;
    case percentage > 70:
      bar = barColor.five;
      break;
    case percentage > 55:
      bar = barColor.four;
      break;
    case percentage > 40:
      bar = barColor.three;
      break;
    case percentage > 25:
      bar = barColor.two;
      break;
    case percentage > 10:
      bar = barColor.one;
      break;
    default:
      bar = "w-0 border-(--bar-low)/1";
  }

  return (
    <>
      <span className="flex justify-start items-center w-full border border-(--carbon-black)/30 rounded-full bg-(--dim-grey)/40">
        <span className={`border-2 rounded-full ${bar}`} />
      </span>
    </>
  );
}
