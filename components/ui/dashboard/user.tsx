"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeftStartOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  UserDesignation,
  UserImage,
  UserName,
} from "@/components/dashboard/current-user";
import HoverStatus from "@/components/ui/present-status/hover-status";
import { createPortal } from "react-dom";
import { profileSettings } from "@/lib/dashboard/profile-menu-list";
import Link from "next/link";
import { logout } from "@/app/actions/login/owner-actions";

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
            <div ref={menuRef} className="fixed bottom-6 left-6">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setClicked(false)}
                className="w-6 h-6 absolute z-210 rounded-full p-1 flex justify-center items-center bottom-3 left-3 cursor-pointer shadow-xl/20 inset-shadow-sm/20 bg-carbon-overlay hover:border-(--dim-grey)/50 hover:shadow-xl/30 hover:inset-shadow-sm/30"
              >
                <XMarkIcon className="text-foreground" />
              </button>

              <div className="relative">
                <div className="absolute z-200 bottom-1 left-1 flex flex-col bg-carbon-overlay/70 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-xl border-2 border-r-0 border-l-0 border-dim-grey-overlay gap-2 text-accent-foreground px-3 pt-2 pb-12">
                  {profileSettings.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        href={link.route}
                        onClick={() => setClicked(false)}
                        className="border px-3 py-2 flex items-center gap-2 border-dim-grey-overlay rounded-lg w-full hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[13px] font-light hover:font-medium text-foreground"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span className="text-[11px] text-nowrap">
                          {link.name}
                        </span>
                      </Link>
                    );
                  })}
                  <form action={logout}>
                    <button
                      type="submit"
                      className="flex items-center gap-2 border px-3 py-2 border-dim-grey-overlay rounded-lg w-full hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 font-light hover:font-medium text-foreground"
                    >
                      <ArrowLeftStartOnRectangleIcon className="w-4 h-4" />
                      <span className="text-[11px]">Logout</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>,
            document.body,
          )}

        <hr className="border border-t-0 rounded-2xl border-(--orange) w-full my-2" />

        {/* logged-in member on the nav bar */}
        <button
          ref={buttonRef}
          className="flex justify-start items-center gap-2 px-3 py-2 inset-shadow-sm/20 rounded-lg inset-shadow-slate-500 shadow-xl/20 cursor-pointer border border-(--dim-grey)/30 hover:border-(--dim-grey)/50 w-full"
          onClick={changeClicked}
        >
          <span className="cursor-pointer">
            <HoverStatus />
          </span>
          <div className="w-7 xs:w-8 h-7 xs:h-8 rounded-2xl flex justify-center items-center overflow-hidden border-foreground">
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
