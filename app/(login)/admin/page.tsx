"use client";

import Image from "next/image";
import { login } from "@/app/actions/login/admin-actions";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// TODO: create-new-user-profile a program that will revoke every attempted access to the admin login page aside from doks account.

export default function AdminLoginPage() {
  const [displayPw, SetDisplayPw] = useState<boolean>(false);

  return (
    <div className="absolute inset-0 background-blob">
      <div className="size-full min-w-75 flex flex-col justify-center items-center backdrop-blur-xs">
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
          {/* form container */}
          <div className="mt-5 sm:mt-10 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-xl border border-r-0 border-l-0 border-white/20 pt-3 px-2 gap-2 text-carbon-black/80 dark:text-off-white/70">
            <span className="text-xs px-3">Admin&apos;s sign-in</span>

            <form
              action={login}
              className="flex flex-col justify-start items-center gap-8 p-3"
            >
              {/* username */}
              <div className="flex  items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
                <input
                  required={true}
                  type="text"
                  name="username"
                  placeholder="Admin name"
                  autoComplete="username"
                  className="px-4 border-none outline-none"
                />
              </div>

              {/* password */}
              <div className="flex  items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
                <input
                  required={true}
                  autoComplete="current-password"
                  type={displayPw ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="px-4 border-none outline-none"
                />
                <span
                  onClick={() => SetDisplayPw((prev) => !prev)}
                  className="cursor-pointer pe-4"
                >
                  {displayPw ? (
                    <EyeIcon className="w-5 h-5" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5" />
                  )}
                </span>
              </div>

              <button
                type="submit"
                className="border-dim-grey-overlay rounded-lg px-2 py-1 hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[14px] font-semibold hover:text-carbon-black text-carbon-black/70 my-3 bg-(--orange) flex justify-center items-center cursor-pointer"
              >
                Continue
              </button>
            </form>
            <div className="w-full flex justify-center items-center mb-2 gap-1 text-[12px]">
              <span>No account yet?</span>
              <Link
                href="/create-admin"
                className="underline underline-offset-2"
              >
                Create here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}