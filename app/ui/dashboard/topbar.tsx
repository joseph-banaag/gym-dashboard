import BurgerMenu from "@/app/ui/dashboard/burger-menu";
import TopBarBreadcrumbs from "@/app/ui/dashboard/topbarbreadcrmbs";
import DateToday from "@/app/lib/date-today";
import Notification from "@/app/ui/dashboard/notif";

export default function Topbar() {
  return (
    <div className="flex justify-center">
      <div className="fixed z-10 w-10/11 lg:w-[calc(100%-260px)] top-1 h-12  p-2 flex items-center justify-between inset-shadow-slate-500 shadow-xl/40 bg-(--carbon-black)/10 dark:bg-(--carbon-black)/40 rounded-xl backdrop-blur-sm">
        <div className="flex justify-center items-center gap-2 md:gap-3">
          <div className="w-5 flex lg:hidden justify-center items-center">
            <BurgerMenu />
          </div>
          <div className="text-xs font-light flex">
            <TopBarBreadcrumbs />
          </div>
        </div>
        <div className="flex gap-2 items-center ">
          <DateToday />
          <Notification />
        </div>
      </div>
    </div>
  );
}