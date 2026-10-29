import { getMember } from "@/lib/dals/member";
import { MapPin, MoveRight, Whistle } from "lucide-react";
import { formatDate, getTimeDay } from "@/components/ui/member/current-time";
import Notification from "@/components/ui/member/member-notif";
import { JetBrains_Mono } from "next/font/google";
import { Metadata } from "next";

let username;

export const metadata: Metadata = {
  title: `${username}`,
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const workoutLength: string = "45 minutes";
const workoutQty: string = "5 exercises";
const workoutType: string = "Strength";
const currentWorkoutPlan: string = "Week 4";
const currentWorkoutTarget: number = 8;

const dateNow = formatDate();

export default async function UsersPage() {
  const member = await getMember();
  const user = member?.username;

  // console.log("MEMBERS FROM DAL: ", member); // remove this once the information is used.

  return (
    <main className="w-full h-full flex flex-col">
      <div className="py-2 flex justify-between items-center mb-4 text-carbon-black/80 dark:text-off-white/80">
        <div className="flex gap-2">
          <MapPin className="w-4 h-4 text-()" />
          <span className="text-[11px] flex gap-1">
            <strong className="text-red-500">Oppa</strong>
            <strong>Fitness Gym</strong>
          </span>
        </div>
        <div className="flex gap-2">
          <Notification />
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-4 px-6">
        <h3 className="text-[11px] text-carbon-black/70 dark:text-off-white/70">
          MEMBER&apos;S DASHBOARD
        </h3>
        <h1 className="text-3xl">
          {getTimeDay()}, {user}!
        </h1>
      </div>
      <div className="flex justify-between px-6 mb-3">
        <span className="text-[11px] text-carbon-black/70 dark:text-off-white/70">
          A quick look at your training and what&apos;s next...
        </span>
        <div className="px-2 py-1 border rounded-xl text-[11px] border-(--dim-grey)/70 inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/10">
          {dateNow}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-3 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10 ">
          <div className="flex flex-col">
            <div className="flex gap-2 mb-4">
              <Whistle className="w-4 h-4" />
              <span className="text-[11px] font-bold text-(--harvest-gold)">
                TODAY&apos;S WORKOUT
              </span>
            </div>
            <div
              className={`${jetbrainsMono.className} flex flex-col gap-1 mb-10`}
            >
              <h1 className="text-3xl font-bold">Upper body strength</h1>
              <div className="text-[11px] font-light text-(--sunflower-gold) ">
                <span>{workoutLength}</span>
                {" · "}
                <span>{workoutQty}</span>
                {" · "}
                <span>{workoutType}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-[11px] text-carbon-black/70 dark:text-off-white/70">
                <span>Workout plan</span>
                {" · "}
                <strong>{currentWorkoutPlan}</strong>
                {" of "}
                <strong>{currentWorkoutTarget}</strong>
              </div>
              <div className="bg-(--sunflower-gold) backdrop-blur-xs border border-(--dim-grey)/70 rounded-2xl px-2 py-1 flex justify-center items-center text-[12px] text-carbon-black font-semibold gap-2 cursor-pointer">
                <span>Start workout</span>
                <MoveRight className="w-3 animate-bounce-x " />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10 "></div>
      </div>
    </main>
  );
}
