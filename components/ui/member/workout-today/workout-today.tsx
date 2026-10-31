import { Calendar, ChevronRight, MoveRight, Whistle } from "lucide-react";
import Link from "next/link";
import { getMember } from "@/lib/dals/member";
import { jetbrainsMono, textColor } from "@/lib/text-helper";

const workoutToday: string = "Upper body strength";
const workoutLength: string = "45 minutes";
const workoutQty: string = "5 exercises";
const workoutType: string = "Strength";
const currentWorkoutPlan: string = "Week 4";
const currentWorkoutTarget: number = 8;
const nextSession: string = "Leg Day";
const nextSessionDay = "Tomorrow";
const nextSessionTime = "7:00 AM";

export default async function WorkoutToday() {
  const member = await getMember();
  const id = member?._id;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-7">
      <div className="relative col-span-1 lg:col-span-3 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10 overflow-hidden">
        {/* RING */}
        <span className="absolute w-54 h-54 rounded-full bottom-0 right-0 translate-y-31 translate-x-15 bg-(--deep-crimson)/70  inset-shadow-sm/20 inset-shadow-slate-500 -z-20">
          <span className="absolute w-74 h-74 border rounded-full bottom-0 right-0 translate-y-10 translate-x-10 bg-(--deep-crimson)/30 border-(--dim-grey)/30 -z-20">
            <span className="absolute w-94 h-94 border rounded-full bottom-0 right-0 translate-y-10 translate-x-10 border-(--dim-grey)/30 -z-20" />
          </span>
        </span>
        <div className="flex flex-col gap-10 z-100">
          <div className="flex flex-col">
            <div className="flex gap-2 mb-4">
              <Whistle className="w-4 h-4" />
              <strong className="text-[11px] text-(--dark-goldenrod) dark:text-(--sunflower-gold)">
                TODAY&apos;S WORKOUT
              </strong>
            </div>
            <div className={`${jetbrainsMono.className} flex flex-col gap-1`}>
              <h1 className="text-3xl font-bold">{workoutToday}</h1>
              <div className="text-[11px] font-light text-(--dark-goldenrod) dark:text-(--sunflower-gold) ">
                <span>{workoutLength}</span>
                {" · "}
                <span>{workoutQty}</span>
                {" · "}
                <span>{workoutType}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
            <div className={`${textColor} w-full`}>
              <Link
                href={`/member/${id}/workouts`}
                className="underline underline-offset-3"
              >
                Workout plan
              </Link>
              {" · "}
              <strong>{currentWorkoutPlan}</strong>
              {" of "}
              <strong>{currentWorkoutTarget}</strong>
            </div>
            <Link
              href="/"
              className="bg-(--harvest-gold) backdrop-blur-xs border border-(--sunflower-gold)/70 rounded-2xl px-2 py-1 flex justify-center items-center text-[12px] text-[#5C4033] font-semibold gap-2 cursor-pointer inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/10 md:w-50 w-full"
            >
              <strong className="text-nowrap">Start workout</strong>
              <MoveRight className="w-3 animate-bounce-x" />
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10 flex flex-col gap-15 ">
        <div>
          <div className={`flex justify-between items-center ${textColor}`}>
            <strong>NEXT SESSION</strong>
            <div className="p-1 rounded-md bg-(--dim-grey)/20">
              <Calendar className="w-4 h-4 " />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`${jetbrainsMono.className} font-bold`}>
              {nextSession}
            </span>
            <Link
              href="/"
              className={`${textColor} underline underline-offset-2`}
            >
              See your last leg day session
            </Link>
          </div>
        </div>

        <div>
          <hr className="border border-t-0 border-(--dim-grey)/50 mb-2" />
          <div className={`${textColor} flex justify-between items-center`}>
            <div>
              <strong>{nextSessionDay}</strong>
              {" · "}
              <span>{nextSessionTime}</span>
            </div>
            <Link href="/" className="flex underline underline-offset-2">
              <span>View details</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//TODO: CREATE DIFFERENT COMPONENTS THAT WILL GET THE INFORMATION FROM ONE COMPONENT AND THEN CREATE A NEW COMPONENT TO HAVE A RESULT OF COMBINING MULTIPLE COMPONENTS LIKE IN THE "WORKOUT-OVERVIEW" FILE.