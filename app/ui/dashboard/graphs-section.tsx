import Dropdown from "@/app/ui/dashboard/dropdown";
import ExerciseToday from "@/app/ui/dashboard/exercise-today";

export default function GraphsSection() {
  return (
    <section className="mt-12 py-3 p-5 sm:px-12 grid grid-col-3 xl:grid-cols-5 gap-5 dark:text-foreground text-(--carbon-black)/90">
      {/* right side */}
      <div className="col-span-3 p-3 rounded-lg bg-(--carbon-black)/10 dark:bg-(--carbon-black)/40">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-md">Attendance rhythm</h3>
            <span className="text-[11px] font-normal">Daily check-ins: </span>
          </div>
          <Dropdown />
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
      <div className="col-span-3 xl:col-span-2 p-3 rounded-lg bg-(--carbon-black)/10 dark:bg-(--carbon-black)/40">
        <ExerciseToday />
      </div>
    </section>
  );
}