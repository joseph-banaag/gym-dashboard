"use client";

import { type FormState, newUser } from "@/app/actions/signup/new-user-actions";
import Image from "next/image";
import { useActionState, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";
import { PLANS } from "@/lib/plans";

const initialState: FormState = {};

export default function CreateUserAccount() {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const [state, formAction, pending] = useActionState(newUser, initialState);

  const errorMessages = [
    state.errors?.username,
    state.errors?.email,
    state.errors?.password,
    state.errors?.confirmPassword,
    state.errors?.memberPlan,
  ].filter((msg): msg is string => Boolean(msg));

  return (
    <div className="absolute inset-0 background-blob">
      <div className="size-full min-w-85 flex flex-col justify-center items-center backdrop-blur-xs">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            loading="eager"
            src="/oppa.png"
            alt="Oppa fitness gym logo"
            width={180}
            height={180}
            className="h-auto w-32 md:w-44"
          />
          <span className="text-md font-semibold text-shadow-xs text-carbon-black/70 dark:text-off-white/70">
            Oppa Fitness Gym
          </span>
        </div>

        {/* form container */}
        <div className="mt-5 sm:mt-10 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-xl border border-r-0 border-l-0 border-white/20 pt-3 px-2 sm:px-4 gap-2 text-carbon-black/80 dark:text-off-white/70">
          <form
            action={formAction}
            className="flex flex-col justify-start items-center gap-8 px-2 py-3"
          >
            {/* username */}
            <div className="relative flex items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
              <input
                required={true}
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="username"
                defaultValue={state.values?.username}
                className="px-4 border-none outline-none"
              />
            </div>

            {/* email address */}
            <div className="flex  items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
              <input
                required={true}
                type="email"
                name="email"
                placeholder="juan@email.com"
                autoComplete="email"
                defaultValue={state.values?.email}
                className="px-4 border-none outline-none"
              />
            </div>

            {/*  password*/}
            <div className="flex items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
              <input
                required={true}
                type={showPwd ? "text" : "password"}
                name="password"
                placeholder="Password"
                autoComplete="new-password"
                className="px-4 border-none outline-none"
                minLength={12}
                maxLength={128}
              />
              <span
                onClick={() => setShowPwd((prev) => !prev)}
                className="cursor-pointer pe-4"
              >
                {showPwd ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </span>
            </div>

            {/*  confirm password*/}
            <div className="flex  items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
              <input
                required={true}
                type={showPwd ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="new-password"
                className="px-4 border-none outline-none"
              />
            </div>

            {/* Plan options */}
            <div className="flex justify-center items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light px-4">
              <select
                name="memberPlan"
                required={true}
                defaultValue="default"
                className="w-full relative outline-none"
              >
                <option
                  value="default"
                  disabled
                  className="bg-off-white/70 dark:bg-carbon-black/80 px-2 py-1 outline-none"
                >
                  Select a plan
                </option>
                {PLANS.map((p) => (
                  <option
                    key={p.name}
                    value={p.value}
                    className="bg-off-white/70 dark:bg-carbon-black/80 px-2 py-1 outline-none"
                  >
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={pending}

              className="border-dim-grey-overlay rounded-lg px-2 py-1 hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[14px] font-semibold hover:text-carbon-black text-carbon-black/70 my-3 bg-(--orange) flex justify-center items-center cursor-pointer"
            >
              {pending ? "Creating..." : "Create your account"}
            </button>
          </form>
          {errorMessages.length > 0 &&
            createPortal(
              <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex w-80 flex-col gap-2">
                {errorMessages.map((msg) => (
                  <p
                    key={msg}
                    role="alert"
                    className="text-[11px] font-light rounded-lg dark:bg-carbon-black/80 bg-off-white/30 px-2 py-1 backdrop-blur-xs border border-(--dim-grey)/30 inset-shadow-carbon-overlay"
                  >
                    {msg}
                  </p>
                ))}
              </div>,
              document.body,
            )}
        </div>
      </div>
    </div>
  );
}