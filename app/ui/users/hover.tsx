"use client";
import { useState } from "react";
import clsx from "clsx";
import UserStats from "./user-status";

export default function Hover() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  //todo: create a switch case to display status on tooltip
  enum Status {
    available,
    away,
    busy,
    offline,
  }

  const tooltip = (status: Status): string => {
    switch (status) {
      case Status.available:
        return "Anong kelangan? 🤔";
      case Status.away:
        return "Natae. 🤭";
      case Status.busy:
        return "busy ngani! 🤪";
      case Status.offline:
        return "Umuwi na. 😎";
    }
  };
  const currentStatus = tooltip(Status.busy);

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
          `${isHovered ? "border h-3 border-(--dim-grey)/30 absolute top-3 flex justify-center items-center text-[12px] p-3 rounded-full backdrop-blur-xs" : "hidden"} flex `,
        )}
      >
        {currentStatus}
      </span>
    </div>
  );
}
