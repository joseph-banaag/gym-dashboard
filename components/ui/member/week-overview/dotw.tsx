import { Check } from "lucide-react";
import { textColor } from "@/lib/text-helper";

//TODO: create a program that will map the current week starting Sunday. It should display the created session or workout plan, the program for the plan, it should show when it's done or missed. and the dotw should also show rest days if any.

export default function DaysOfTheWeek() {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-5 mx-auto mb-4 text-nowrap">
      {/* with schedule */}
      <div className="w-full col-span-1 mx-auto flex justify-center items-center border border-(--dim-grey)/50 p-2 rounded-md inset-shadow-sm/2 flex-col bg-">
        <strong className={textColor}>SUN</strong>
        <hr className="border border-(--sunflower-gold) w-full mt-1 mb-2 " />
        <span className="flex justify-center items-center w-6 h-6 rounded-full border border-(--dim-grey)/50 bg-carbon-overlay text-[11px] mb-2">
          01
        </span>
        <span className="text-[11px] text-foreground/80">Leg day</span>
      </div>

      {/* without schedule */}
      <div className="w-full col-span-1 mx-auto flex justify-center items-center border border-(--dim-grey)/50 p-2 rounded-md inset-shadow-sm/2 flex-col">
        <strong className={textColor}>MON</strong>
        <hr className="border border-(--dim-grey) w-full mt-1 mb-2 " />
        <span className="flex justify-center items-center w-6 h-6 rounded-full border border-(--dim-grey)/50 bg-carbon-overlay text-[11px] mb-2">
          26
        </span>
        <span className="text-[11px] text-foreground/80">Rest day</span>
      </div>

      {/* with schedule */}
      <div className="w-full col-span-1 mx-auto flex justify-center items-center border border-(--dim-grey)/50 p-2 rounded-md inset-shadow-sm/2 flex-col">
        <strong className={textColor}>WED</strong>
        <hr className="border border-red-500 w-full mt-1 mb-2 " />
        <span className="flex justify-center items-center w-6 h-6 rounded-full border border-(--dim-grey)/50 bg-carbon-overlay text-[11px] mb-2">
          27
        </span>
        <span className="text-[11px] text-foreground/80">Missed</span>
      </div>

      {/* done session */}
      <div className="w-full col-span-1 mx-auto flex justify-center items-center border border-(--dim-grey)/50 p-2 rounded-md inset-shadow-sm/2 flex-col">
        <strong className={textColor}>TUE</strong>
        <hr className="border border-green-500 w-full mt-1 mb-2 " />
        <span className="flex justify-center items-center w-6 h-6 rounded-full border border-(--dim-grey)/50 bg-carbon-overlay text-[11px] mb-2">
          <Check className="w-4 h-4" />
        </span>
        <span className="text-[11px] text-foreground/80">Done</span>
      </div>

      {/* with schedule */}
      <div className="w-full col-span-1 mx-auto flex justify-center items-center border border-(--dim-grey)/50 p-2 rounded-md inset-shadow-sm/2 flex-col">
        <strong className={textColor}>THU</strong>
        <hr className="border border-(--sunflower-gold) w-full mt-1 mb-2 " />
        <span className="flex justify-center items-center w-6 h-6 rounded-full border border-(--dim-grey)/50 bg-carbon-overlay text-[11px] mb-2">
          29
        </span>
        <span className="text-[11px] text-foreground/80">Upper body</span>
      </div>

      {/* with schedule */}
      <div className="w-full col-span-1 mx-auto flex justify-center items-center border border-(--dim-grey)/50 p-2 rounded-md inset-shadow-sm/2 flex-col">
        <strong className={textColor}>FRI</strong>
        <hr className="border border-(--sunflower-gold) w-full mt-1 mb-2 " />
        <span className="flex justify-center items-center w-6 h-6 rounded-full border border-(--dim-grey)/50 bg-carbon-overlay text-[11px] mb-2">
          30
        </span>
        <span className="text-[11px] text-foreground/80">Next session</span>
      </div>

      {/* without schedule */}
      <div className="w-full col-span-1 mx-auto flex justify-center items-center border border-(--dim-grey)/50 p-2 rounded-md inset-shadow-sm/2 flex-col">
        <strong className={textColor}>SAT</strong>
        <hr className="border border-(--dim-grey) w-full mt-1 mb-2 " />
        <span className="flex justify-center items-center w-6 h-6 rounded-full border border-(--dim-grey)/50 bg-carbon-overlay text-[11px] mb-2">
          31
        </span>
        <span className="text-[11px] text-foreground/80">Rest day</span>
      </div>
    </div>
  );
}
