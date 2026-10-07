"use client";
import {ChevronDoubleDownIcon} from "@heroicons/react/24/solid";
import {clsx} from "clsx";
import {useState} from "react";

export default function Dropdown() {
  const [clicked, setClicked] = useState<boolean>(false);
  const [sortGraph, setSortGraph] = useState<string>("This week");

  const handleClick = () => setClicked(!clicked);
  const sortList: string[] = ["This week", "Last week", "This month"];

  return (
    <>
      {/* overlay */}
      <span className={`${clicked ? "absolute top-0 right-0 bottom-0 left-0 w-full h-full" : "hidden"}`}
            onClick={() => setClicked(!clicked)}/>

      <div
        className="relative border flex justify-between items-center gap-2 py-1 px-2 rounded-lg border-(--dim-grey) cursor-pointer"
        onClick={handleClick}>

        <span className="text-[11px] font-light">{sortGraph}</span>
        <ChevronDoubleDownIcon
          className={clsx(
            `${clicked ? " animate-bounce" : "animate-none"} w-4 h-4`,
          )}
        />
        <div
          className={clsx(`
        ${clicked ? "absolute" : "hidden"}  border top-7 left-0 text-[11px] px-1 border-(--dim-grey)/30 bg-(--carbon-black)/40 backdrop-blur-xs rounded-md flex flex-col justify-center items-center gap-1 py-2`)}
        >
          {sortList.map((item) => (
            <button
              key={item}
              onClick={() => setSortGraph(item)}
              className="py-1 px-2 border border-(--off-white)/30 dark:border-(--dim-grey)/30 rounded-md text-[11px] text-(--off-white)/90 bg-(--carbon-black)/30 shadow-lg/20"
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </>
  );
}
// create a list of options for the dropdown menu and then set the value of the option using useState
// todo: import the server const here and accept the props that will be using to get data from the database that
//  will be called by a server component containing the graph. the server const will be exported by the main graph
//  component via exported const.