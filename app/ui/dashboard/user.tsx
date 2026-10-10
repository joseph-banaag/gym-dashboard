"use client";
import UserProfileMenu from "../users/user-profile-menu";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  UserDesignation,
  UserImage,
  UserName,
} from "@/app/lib/dashboard/current-user";
import HoverStatus from "../users/hover-status";

export default function UserLoggedIn() {
  const [clicked, setClicked] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const changeClicked = () => setClicked(!clicked);

  useEffect(() => {
    if (!clicked) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setClicked(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [clicked]);

  return (
    <div ref={ref} className="relative w-full">
      <div className="flex flex-col gap-2 p-1 pb-2 w-full">
        <button
          className={clsx(clicked ? "block" : "hidden")}
          onClick={changeClicked}
        >
          <span className="w-8 h-8 z-5 absolute rounded-full p-1 flex justify-center items-center bottom-3 left-3 cursor-pointer shadow-xl/20 inset-shadow-sm/20  bg-(--off-white)/30 dark:bg-(--dim-grey)/70">
            <XMarkIcon className="dark:text-(--sunflower-gold) text-(--orange)" />
          </span>
          <UserProfileMenu />
        </button>

        <hr className="border rounded-2xl  border-(--orange) dark:border-(--dark-goldenrod) w-full my-2" />

        {/* logged-in user on the nav bar */}
        <button
          className="flex justify-start items-center gap-2 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/20 cursor-pointer border border-(--dim-grey)/30 hover:border hover:border-(--dim-grey)/50 w-full"
          onClick={changeClicked}
        >
          <span className="cursor-pointer">
            <HoverStatus />
          </span>
          <div className="w-8 h-8 rounded-2xl flex justify-center items-center overflow-hidden border-foreground">
            <UserImage />
          </div>
          <div className="flex flex-col justify-start items-start">
            <UserName />
            <UserDesignation />
          </div>
        </button>
      </div>
    </div>
  );
}