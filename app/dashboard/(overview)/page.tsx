import { cards } from "@/app/lib/cards";

export default function Overview() {
  return (
    <main>
      <div className="p-8 flex items-center gap-3 mb-3  md:mb-8 ">
        <h1 className="text-4xl font-bold tracking-wider">Philippians 4:13</h1>
        <span className="text-[12px] font-extralight tracking-wider">
          &quot;I can do all things through Christ who strengthens me.&quot;
        </span>
      </div>
      <div className="flex justify-start xl:justify-end  px-8 mb-2">
        <p className="text-[12px] font-extralight">
          A quick read on what&apos;s happening at Oppa Fitness Gym today.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 px-8 ">
        {/*######  CARDS ###### */}
        {cards.map((c) => {
          const CardIcon = c.icon;
          const TrajectoryIcon = c.trajectory;
          return (
            <div
              key={c.name}
              className="p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/40 flex flex-col gap-2"
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
                {/*todo: find a way to apply "green" if the trajectory is good and "red" if not */}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
