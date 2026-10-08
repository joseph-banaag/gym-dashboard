import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { programSchedule } from "@/app/lib/programs-today";
import SeatStatus from "@/app/ui/dashboard/seat-status";

export default function ExerciseToday() {
  return (
    <section className="flex flex-col justify-center gap-2">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-md">Today at a glance</h3>
          {/* todo: update this with the next schedule from the database */}
          <span className="text-[11px] font-normal">
            Next Session: Next week
          </span>
        </div>
        <Link href="/schedule" className="flex gap-1 p-1">
          <span className="text-[11px] font-light">More schedule</span>
          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </Link>
      </div>
      <div>
        {programSchedule.map((p) => {
          return (
            <div key={p.exercise}>
              <hr className="border border-t-0 border-(--dim-grey)/30 mb-1 rounded-full" />
              <div className="grid grid-cols-7 gap-2 mb-2">
                <div className="col-span-1 text-[11px] font-light">
                  {p.time}
                </div>
                <div className="col-span-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">{p.exercise}</span>
                    <span className="text-[12px] font-light">{p.coach}</span>
                  </div>
                </div>
                <span className="col-span-2 text-[11px] font-light">
                  <span className="flex flex-col gap-1 items-end w-full">
                    <span>
                      {p.attendees}/{p.totalSeats}{" "}
                      <span className="font-bold">booked</span>
                    </span>
                    <SeatStatus attnd={p.attendees} total={p.totalSeats} />
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}