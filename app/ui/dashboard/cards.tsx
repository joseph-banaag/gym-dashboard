import { cardContent } from "@/app/lib/cards";

export default function Cards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 px-8">
      {cardContent.map((c) => {
        const CardIcon = c.icon;
        const TrajectoryIcon = c.trajectory;
        return (
          <div
            key={c.name}
            className="p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10 flex flex-col gap-2"
          >
            <span className="flex  justify-between items-center">
              <span className="text-[12px] font-light">{c.name}</span>
              <CardIcon className="w-4 h-4" />
            </span>
            <span className="text-2xl font-bold">{c.value}</span>
            <span className="flex justify-between gap-1 items-center ">
              <span className="text-[12px] font-extralight">
                {c.performance}
              </span>
              <TrajectoryIcon className="w-4 h-4 text-green-500" />
            </span>
          </div>
        );
      })}
    </section>
  );
}

// todo: find a way to apply "green" if the trajectory is good and "red" if not