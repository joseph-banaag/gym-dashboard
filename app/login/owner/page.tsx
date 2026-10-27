"use client";

import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { login, type OwnerLoginState } from "@/app/actions/login/owner-actions";
import { useActionState, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const initialState: OwnerLoginState = {};

export default function OwnerLoginPage() {
  const [showPw, setShowPw] = useState<boolean>(false);
  const [state, formAction, pending] = useActionState(login, initialState);

  const errorMessages = [
    state.errors?.ownerName,
    state.errors?.ownerPassword,
  ].filter((msg): msg is string => Boolean(msg));

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

          {/*  form container */}
          <div className="mt-5 sm:mt-10 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-xl border border-r-0 border-l-0 border-white/20 pt-3 px-2 gap-2 text-carbon-black/80 dark:text-off-white/70">
            <span className="text-xs px-3">Owner&apos;s sign-in</span>

            <form
              action={formAction}
              className="flex flex-col justify-start items-center gap-8 p-3"
            >
              {/* username */}
              <div className="flex items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
                <input
                  required={true}
                  type="text"
                  name="ownerName"
                  placeholder="Owner's name"
                  autoComplete="username"
                  className="px-4 border-none outline-none"
                />
              </div>

              {/* password*/}
              <div className="flex items-center w-full py-2 bg-off-white/20 dark:bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-lg border border-r-0 border-l-0 border-white/20 text-sm font-light">
                <input
                  required={true}
                  autoComplete="current-password"
                  type={showPw ? "text" : "password"}
                  name="ownerPassword"
                  placeholder="Password"
                  className="px-4 border-none outline-none background-none"
                />
                <span
                  onClick={() => setShowPw((prev) => !prev)}
                  className="cursor-pointer pe-4"
                >
                  {showPw ? (
                    <EyeIcon className="w-5 h-5" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5" />
                  )}
                </span>
              </div>
              <button
                type="submit"
                disabled={pending}

                className="border-dim-grey-overlay rounded-lg px-2 py-1 hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[14px] font-semibold hover:text-off-white text-carbon-black my-3 bg-(--orange) flex justify-center items-center cursor-pointer hover:bg-(--dark-goldenrod)"
              >
                {pending && (
                  <svg
                    className="mr-3 size-5 animate-spin text-(--azure-mist)"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                {pending ? "Processing..." : "Login"}
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

            <div className="w-full flex justify-center items-center mb-2 gap-1 text-[12px]">
              <span>No account yet?</span>
              <Link
                href="/sign-up/owner/create-owner"
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