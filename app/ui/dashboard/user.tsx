"use client";
import UserProfileMenu from "../users/user-profile-menu";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {XMarkIcon} from "@heroicons/react/24/solid";
import {UserDesignation, UserImage, UserName} from "@/app/lib/current-user";
import HoverStatus from "../users/hover-status";

export default function UserLoggedIn() {
  const [clicked, setClicked] = useState<boolean>(false);

  const changeClicked = () => setClicked(!clicked);

  useEffect(() => {
    if (!clicked) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setClicked(false);
      }

    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);

  }, [clicked]);

  return (
    <>
      {/* overlay */}
      <span
        className={clsx(
          `${clicked ? "absolute w-screen h-full top-0 bottom-3 left-0 right-0" : "hidden"}`,
        )}
        onClick={changeClicked}
      />
      {/* user-profile-menu */}
      <div className="relative flex flex-col gap-2 p-1 pb-2  w-full">
        <div className={clsx(clicked ? "block" : "hidden")}>
          <button
            className="absolute z-2 rounded-full p-1 flex justify-center items-center bottom-3 left-3 cursor-pointer border border-t-0 border-r-0 border-l-0 border-b-(--dim-grey) bg-(--carbon-black)/70"
            onClick={changeClicked}
          >
            <span className="w-6 h-6">
              <XMarkIcon className="text-(--sunflower-gold)"/>
            </span>
          </button>
          <UserProfileMenu/>
        </div>

        <hr className="border rounded-2xl  border-(--orange) dark:border-(--dark-goldenrod) w-full mb-1"/>

        {/* logged-in user on the nav bar */}
        <button
          className="flex justify-start items-center gap-2 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/20 cursor-pointer border border-(--dim-grey)/30 hover:border hover:border-(--dim-grey)/50"
          onClick={changeClicked}
        >
          <span className="cursor-pointer">
            <HoverStatus/>
          </span>
          <div className="w-8 h-8 rounded-2xl flex justify-center items-center overflow-hidden border-foreground">
            <UserImage/>
          </div>
          <div className="flex flex-col justify-start items-start">
            <UserName/>
            <UserDesignation/>
          </div>
        </button>
      </div>
    </>
  );
}