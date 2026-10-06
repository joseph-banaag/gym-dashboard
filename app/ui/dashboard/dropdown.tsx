"use client";
import {ChevronDoubleDownIcon} from "@heroicons/react/24/solid";
import {clsx} from "clsx";
import {useState} from "react";

export default function Dropdown() {
  const [clicked, setClicked] = useState<boolean>(false);

  // const attendanceCheck: string[] = ["This week", "Last week", "This month"];

  const handleClick = () => setClicked(!clicked);

  return (
    <div
      className="relative border flex justify-between items-center gap-2 py-1 px-2 rounded-lg border-(--dim-grey) cursor-pointer"
      onClick={handleClick}
    >
      <span
        className={clsx(
          `${clicked ? "absolute top-0 bottom-0 right-0 left-0 z-1" : "hidden"}`,
        )}
      />
      <span className="text-[11px] font-light">This week</span>
      <ChevronDoubleDownIcon
        className={clsx(
          `${clicked ? " animate-bounce" : "animate-none"} w-4 h-4 z-5`,
        )}
      />
      <div
        className={clsx(`
        ${clicked ? "absolute" : "hidden"}  border top-6 left-0 w-20 h-20 text-[11px] p-1`)}
      >
        dropdown content
      </div>
    </div>
  );
}

// todo: import the server component here and accept the props that will be using to get data from the database to
//  display the selected graph from the drop down button