interface SeatStatusProps {
  attnd?: string;
  total?: string;
}

const barColor = {
  low: "w-4 border-(--bar-low)",
  mid: "w-8 border-(--bar-mid)",
  above: "w-12 border-(--bar-above-mid)",
  full: "w-16 border-(--bar-full)",
};

export default function SeatStatus({ attnd, total }: SeatStatusProps) {
  //props cannot be called directly. It will throw value may be undefined error. assigning it to a variable first and then apply to what's needing it.
  const attendees: number = Number(attnd);
  const totalSeats: number = Number(total);

  const percentage: number = (attendees / totalSeats) * 100;

  let bar: string;

  switch (true) {
    case percentage > 75:
      bar = barColor.full;
      break;
    case percentage > 50:
      bar = barColor.above;
      break;
    case percentage > 25:
      bar = barColor.mid;
      break;
    case percentage > 0:
      bar = barColor.low;
      break;
    default:
      bar = "w-0 border-(--bar-low)/1";
  }

  return (
    <>
      <span className="flex justify-start items-center w-16 border border-(--carbon-black)/30 rounded-full bg-(--dim-grey)/40">
        <span className={`border-2 rounded-full ${bar}`} />
      </span>
    </>
  );
}
