interface SeatStatusProps {
  attnd?: string;
  total?: string;
}

export default function SeatStatus({ attnd, total }: SeatStatusProps) {
  const barColor = {
    low: "w-4 border-(--bar-low)",
    mid: "w-8 border-(--bar-mid)",
    above: "w-12 border-(--bar-above-mid)",
    full: "w-16 border-(--bar-full)",
  };

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
    default:
      bar = barColor.low;
  }

  return (
    <>
      <span className="flex justify-start items-center w-16 border border-(--carbon-black)/30 rounded-full bg-(--dim-grey)/40">
        <span className={`border-2 rounded-full ${bar}`} />
      </span>
    </>
  );
}