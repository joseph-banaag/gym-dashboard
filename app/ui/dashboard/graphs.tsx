import Dropdown from "./dropdown";

export default function Graphs() {

  return (
    <section className="mt-12 py-3 px-12 grid grid-cols-5 gap-5 dark:text-foreground text-(--carbon-black)/90">
      {/* right side */}
      <div
        className="border col-span-3 p-3 rounded-lg border-(--dim-grey) dark:border-(--dim-grey) bg-(--carbon-black)/10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm">Attendance rhythm</h3>
            <span className="text-[11px] font-extralight">
              Daily check-ins:{" "}
            </span>
          </div>
          <Dropdown/>
        </div>
        <div className="p-4">
          <div className="w-full h-full flex justify-center items-center border border-(--dim-grey)/40 rounded-lg">
            <div className="px-5 h-30 flex justify-center items-center">
              {/* change width and height of this section to follow the parent component dimension*/}
              graph here...
            </div>
          </div>
        </div>
      </div>
      {/* left side */}
      <div className="border col-span-2">today&apos;s session
      </div>
    </section>
  );
}