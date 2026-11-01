import { jetbrainsMono, textColor } from "@/lib/text-helper";
import DaysOfTheWeek from "@/components/ui/member/week-overview/dotw";
import Link from "next/link";
import { Dumbbell, MoveRight } from "lucide-react";

interface IdProps {
  id?: string;
}

export default function WeekOverview({ id }: IdProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-5">
      {/*  days of the week */}
      <div className="col-span-1 lg:col-span-4 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col ">
            <strong className={`${jetbrainsMono.className} text-sm`}>
              Your week
            </strong>
            <p className={textColor}>Keep your routine moving</p>
          </div>
          <div className="flex justify-center items-center ">
            <p
              className={`${jetbrainsMono.className} ${textColor} dark:dim-grey-overlay font-semibold backdrop-blur-xs  px-2 py-1 border rounded-lg border-(--dim-grey)/30`}
            >
              4 sessions
            </p>
          </div>
        </div>
        <DaysOfTheWeek />

        <span className={textColor}>
          You have session today. Click start workout to proceed.
        </span>
      </div>

      {/* recent sessions... */}
      {/*  TODO: link the recent sessions to the done session in the dotw above ↑. DO NOT MAPPED IT. USED THE ALTERNATE DESIGN INSTEAD */}
      <div className="col-span-1 lg:col-span-3 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col ">
            <strong className={`${jetbrainsMono.className} text-sm`}>
              Recent sessions
            </strong>
            <p className={textColor}>Consistency is key</p>
          </div>
          <div className="flex justify-center items-center ">
            <Link
              href={`/member/${id}/attendance`}
              className={`${jetbrainsMono.className} ${textColor} dark:dim-grey-overlay font-semibold backdrop-blur-xs  px-2 py-1 border rounded-lg border-(--dim-grey)/30 flex gap-1 items-center justify-center`}
            >
              <span>See all</span>
              <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="rounded-md bg-carbon-overlay border border-(--dim-grey)/20 flex flex-col">
          {/* todo: display the last three sessions here... */}
          <div className="flex justify-between items-center px-3 py-2">
            <div className="flex gap-4 items-center text-foreground/70">
              <Dumbbell className="w-4 h-4" />
              <div className={`${textColor} flex flex-col`}>
                <strong>Full body strength</strong>
                <span>Yesterday </span>
              </div>
            </div>
            <span className={`${jetbrainsMono.className} ${textColor}`}>
              45 minutes
            </span>
          </div>

          <div className="flex justify-between items-center bg-(--dim-grey)/10 px-3 py-2">
            <div className="flex gap-4 items-center text-foreground/70">
              <Dumbbell className="w-4 h-4" />
              <div className={`${textColor} flex flex-col`}>
                <strong>Full body strength</strong>
                <span>Yesterday </span>
              </div>
            </div>
            <span className={`${jetbrainsMono.className} ${textColor}`}>
              45 minutes
            </span>
          </div>

          <div className="flex justify-between items-center px-3 py-2">
            <div className="flex gap-4 items-center text-foreground/70">
              <Dumbbell className="w-4 h-4" />
              <div className={`${textColor} flex flex-col`}>
                <strong>Full body strength</strong>
                <span>Yesterday </span>
              </div>
            </div>
            <span className={`${jetbrainsMono.className} ${textColor}`}>
              45 minutes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
