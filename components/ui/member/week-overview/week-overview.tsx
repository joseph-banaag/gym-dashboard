import { jetbrainsMono, textColor } from "@/lib/text-helper";

export default function WeekOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-5">
      <div className="col-span-1 lg:col-span-4 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10">
        <div className="flex justify-between mb-3">
          <div className="flex flex-col ">
            <strong className={`${jetbrainsMono.className} text-sm`}>
              Your week
            </strong>
            <p className={textColor}>Keep your routine moving</p>
          </div>
          <div className="flex justify-center items-center">
            <strong
              className={`${jetbrainsMono.variable} text-[11px] px-2 py-1 bg-(--harvest-gold) text-[#5C4033] rounded-lg`}
            >
              3 visits logged
            </strong>
          </div>
        </div>

        <div
          className={` ${textColor} grid grid-cols-7 gap-2 w-[95%] mx-auto `}
        >
          <div className="col-span-1 flex justify-center items-center">MON</div>
          <div className="col-span-1 flex justify-center items-center">TUE</div>
          <div className="col-span-1 flex justify-center items-center">WED</div>
          <div className="col-span-1 flex justify-center items-center">THU</div>
          <div className="col-span-1 flex justify-center items-center">FRI</div>
          <div className="col-span-1 flex justify-center items-center">SAT</div>
          <div className="col-span-1 flex justify-center items-center">SUN</div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3 border border-(--dim-grey)/50 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/10">
        test
      </div>
    </div>
  );
}
