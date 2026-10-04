"use client";
import UserProfile from "../users/user-profile";
import clsx from "clsx";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import UserStats from "../users/user-status";
import { UserImage, UserName, UserDesignation } from "@/app/lib/current-user";

export default function UserLoggedIn() {
  const [clicked, setClicked] = useState<boolean>(false);

  const changeClicked = () => setClicked(!clicked);

  return (
    <>
      <span
        className={clsx(
          `${clicked ? "absolute w-screen h-full top-0 bottom-3 left-0 right-0" : "hidden"}`,
        )}
        onClick={changeClicked}
      />
      <div className="relative flex flex-col gap-2 p-1 pb-2  w-full">
        <div className={clsx(clicked ? "block" : "hidden")}>
          <span
            className="absolute z-2 border bg-(--carbon-black) border-(--dim-grey)/40 rounded-2xl p-1 flex justify-center items-center bottom-3 left-3 shadow-ua1 cursor-pointer"
            onClick={changeClicked}
          >
            <span className="w-6 h-6">
              <XMarkIcon />
            </span>
          </span>
          <UserProfile />
        </div>
        <hr className="border rounded-2xl  border-(--orange) dark:border-(--dark-goldenrod) w-full" />
        <div
          className="flex justify-start items-center gap-2 p-3 text-foreground inset-shadow-sm/20 dark:text-(--off-white) rounded-xl inset-shadow-slate-500 transition delay-75 duration-150 ease-in-out shadow-xl/40 hover:shadow-xl/50 hover:shadow-ua2 cursor-pointer"
          onClick={changeClicked}
        >
          <span>
            <UserStats />
          </span>
          <div className="w-8 h-8 rounded-2xl flex justify-center items-center overflow-hidden border-foreground">
            <UserImage />
          </div>
          <div className="flex flex-col justify-start items-start">
            <UserName />
            <UserDesignation />
          </div>
        </div>
      </div>
    </>
  );
}
