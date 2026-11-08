import { textColor } from "@/lib/text-helper";

export interface ProgramProps {
  program: number;
  target: number;
}

const progressStatus = {
  one: "w-[11.11%] border-(--visit-one)",
  two: "w-[22.22%] border-(--visit-one)",
  three: "w-[33.33%] border-(--visit-two)",
  four: "w-[44.44%] border-(--visit-two)",
  five: "w-[55.55%] border-(--visit-three)",
  six: "w-[66.66%] border-(--visit-three)",
  seven: "w-[77.77%] border-(--visit-four)",
  eight: "w-[88.88%] border-(--visit-five)",
  nine: "w-[100%] border-(--visit-six)",
};
export default function ProgramProgress({ program, target }: ProgramProps) {
  const percentage = (program / target) * 100;

  let progressBar: string;

  switch (true) {
    case percentage > 90:
      progressBar = progressStatus.nine;
      break;
    case percentage > 80:
      progressBar = progressStatus.eight;
      break;
    case percentage > 70:
      progressBar = progressStatus.seven;
      break;
    case percentage > 60:
      progressBar = progressStatus.six;
      break;
    case percentage > 50:
      progressBar = progressStatus.five;
      break;
    case percentage > 40:
      progressBar = progressStatus.four;
      break;
    case percentage > 30:
      progressBar = progressStatus.three;
      break;
    case percentage > 20:
      progressBar = progressStatus.two;
      break;
    case percentage > 10:
      progressBar = progressStatus.one;
      break;
    default:
      progressBar = "w-0 border-(--bar-low)/1";
  }

  return (
    <div>
      <span className={textColor}>Plan completion</span>
      <span className="flex justify-start items-center w-full border border-(--carbon-black)/30 rounded-full bg-(--dim-grey)/40">
        <span className={`border-2 rounded-full ${progressBar}`} />
      </span>
    </div>
  );
}
