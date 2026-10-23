"use client";
import { useActionState, useState } from "react";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  type FormState,
  newCoach,
} from "@/app/actions/signup/new-coach-actions";
import { createPortal } from "react-dom";

const initialState: FormState = {};

export default function CreateCoach() {
  const [displayPwd, setDisplayPwd] = useState<boolean>(false);
  const [state, formAction, pending] = useActionState(newCoach, initialState);

  const errorMessages = [
    state.errors?.coachName,
    state.errors?.coachEmail,
    state.errors?.coachPassword,
    state.errors?.coachConfirmPassword,
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
            <div className="flex  items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
              <input
                required={true}
                type="text"
                name="coachName"
                placeholder="Coach name"
                autoComplete="username"
                defaultValue={state.values?.coachName}
                className="px-4 border-none outline-none"
              />
            </div>

            {/* email address */}
            <div className="flex  items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
              <input
                required={true}
                type="email"
                name="coachEmail"
                placeholder="juan@email.com"
                autoComplete="email"
                defaultValue={state.values?.coachEmail}
                className="px-4 border-none outline-none"
              />
            </div>

            {/*  password*/}
            <div className="flex  items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
              <input
                required={true}
                type={displayPwd ? "text" : "password"}
                name="coachPassword"
                placeholder="Password"
                autoComplete="new-password"
                className="px-4 border-none outline-none"
                minLength={12}
                maxLength={128}
              />
              <span
                onClick={() => setDisplayPwd((prev) => !prev)}
                className="cursor-pointer pe-4"
              >
                {displayPwd ? (
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
                type={displayPwd ? "text" : "password"}
                name="coachConfirmPassword"
                placeholder="Confirm Password"
                autoComplete="new-password"
                className="px-4 border-none outline-none"
              />
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