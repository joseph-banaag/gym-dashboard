"use client";
import React, { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  UserDesignation,
  UserImage,
  UserName,
} from "@/app/lib/dashboard/current-user";
import HoverStatus from "../users/hover-status";
import { createPortal } from "react-dom";
import { profileSettings } from "@/app/lib/dashboard/profile-menu-list";
import Link from "next/link";

type UserLoggedInProps = {
  portalRef?: React.RefObject<HTMLDivElement | null>;
};

export default function UserLoggedIn({ portalRef }: UserLoggedInProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const internalMenuRef = useRef<HTMLDivElement | null>(null);
  const menuRef = portalRef ?? internalMenuRef;

  const changeClicked = () => setClicked(!clicked);

  useEffect(() => {
    if (!clicked) return;

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideTrigger = ref.current?.contains(target);
      const insideMenu = menuRef.current?.contains(target);
      if (!insideTrigger && !insideMenu) setClicked(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setClicked(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [clicked, menuRef]);

  return (
    <div ref={ref} className="relative w-full">
      <div className="flex flex-col gap-2 p-1 pb-2 w-full">
        {clicked &&
          createPortal(
            <div ref={menuRef} className="fixed bottom-1 left-1">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setClicked(false)}
                className="w-8 h-8 absolute z-210 rounded-full p-1 flex justify-center items-center bottom-3 left-3 cursor-pointer shadow-xl/20 inset-shadow-sm/20 bg-carbon-overlay hover:border-(--dim-grey)/50 hover:shadow-xl/30 hover:inset-shadow-sm/30"
              >
                <XMarkIcon className="text-(--orange)" />
              </button>

              <div className="relative">
                <div className="absolute z-200 bottom-0 left-0 w-60 flex flex-col bg-carbon-overlay backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-xl border-2 border-r-0 border-l-0 border-dim-grey-overlay pt-3 pb-16 px-4 gap-2 text-accent-foreground">
                  {profileSettings.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        href={link.route}
                        onClick={() => setClicked(false)}
                        className="border p-3 flex items-center gap-2 border-dim-grey-overlay rounded-lg w-full hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[13px] font-light hover:font-medium text-foreground"
                      >
                        <span className="w-5 h-5">
                          <LinkIcon />
                        </span>
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>,
            document.body,
          )}

        <hr className="border border-t-0 rounded-2xl border-(--orange) w-full my-2" />

        {/* logged-in user on the nav bar */}
        <button
          ref={buttonRef}
          className="flex justify-start items-center gap-2 p-3 inset-shadow-sm/20 rounded-xl inset-shadow-slate-500 shadow-xl/20 cursor-pointer border border-(--dim-grey)/30 hover:border-(--dim-grey)/50 w-full"
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