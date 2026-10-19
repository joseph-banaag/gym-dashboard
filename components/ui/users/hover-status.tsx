"use client";
import { useState } from "react";
import clsx from "clsx";
import UserStats from "./user-status";
import { status } from "@/app/ui/users/user-status";

let userStatus: string;

if (status === "available") {
  userStatus = "Available";
} else if (status === "busy") {
  userStatus = "Busy";
} else if (status === "away") {
  userStatus = "Away (AFK)";
} else {
  userStatus = "Offline";
}

export default function HoverStatus() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="cursor-pointer"
    >
      <UserStats />
      <span
        className={clsx(
          isHovered
            ? "border h-3 border-(--dim-grey)/30 absolute top-3 flex justify-center items-center text-[12px]" +
                " p-3 rounded-full backdrop-blur-xs"
            : "hidden",
          "flex",
        )}
      >
        {userStatus}
      </span>
    </div>
  );
}