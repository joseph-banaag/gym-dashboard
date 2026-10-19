"use client";

import Image from "next/image";
import { login } from "@/app/actions/user-actions";
import { useState } from "react";
import clsx from "clsx";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const [show, setShow] = useState<boolean>(false);

  const changeView = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="absolute inset-0 background-blob">
      <div className="size-full min-w-85 flex flex-col justify-center items-center backdrop-blur-xs">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center">
            <Image
              loading="eager"
              src="/oppa.png"
              alt="Oppa fitness gym logo"
              width={180}
              height={180}
            />
            <span className="text-md font-semibold text-shadow-xs text-carbon-black/70 dark:text-off-white/70">
              Oppa Fitness Gym
            </span>
          </div>
          <div className="mt-5 sm:mt-10 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-xl border-2 border-r-0 border-l-0 border-white/20 pt-3 px-2 sm:px-4 gap-2 text-carbon-black/80 dark:text-off-white/70">
            <form
              action={login}
              className="flex flex-col justify-start items-center gap-8 p-3"
            >
              <span className="flex  items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
                <input
                  required={true}
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="username"
                  className="px-4 border-none outline-none"
                />
              </span>
              <span className="flex  items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
                <input
                  required={true}
                  autoComplete="current-password"
                  type={clsx(show ? "text" : "password")}
                  name="password"
                  placeholder="Password"
                  className="px-4 border-none outline-none"
                />
                <span onClick={changeView} className="cursor-pointer pe-4">
                  {show ? (
                    <EyeIcon className="w-5 h-5" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5" />
                  )}
                </span>
              </span>

              <button
                type="submit"
                className="border-dim-grey-overlay rounded-lg px-2 py-1 hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[14px] font-semibold hover:text-carbon-black text-carbon-black/70 my-3 bg-(--orange) flex justify-center items-center cursor-pointer"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}