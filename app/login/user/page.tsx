import Image from "next/image";
import { login } from "@/app/login/user/actions";

export default function LoginPage() {
  return (
    <div className="absolute inset-0 bg-(--primary-scarlet) bg-radial-[at_75%_90%] from-(--deep-crimson) via-(--primary-scarlet) to-(--deep-crimson) to-95% text-off-white">
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
            <span className="text-md font-semibold text-shadow-lg/20">
              Oppa Fitness Gym
            </span>
          </div>
          <div className="mt-5 sm:mt-10 bg-carbon-black/20 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-xl border-2 border-r-0 border-l-0 border-white/20 pt-3 px-2 sm:px-4 gap-2 text-off-white">
            <form
              action={login}
              className="flex flex-col justify-center items-center gap-8 p-3"
            >
              <input
                required={true}
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="username"
                className="border border-t-0 border-r-0 border-l-0 border-(--orange)/80"
              />
              <input
                required={true}
                autoComplete="current-password"
                type="password"
                name="password"
                placeholder="Password"
                className="border border-t-0 border-r-0 border-l-0 border-(--orange)/80"
              />
              <button
                type="submit"
                className="border-dim-grey-overlay rounded-lg px-2 py-1 hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[13px] font-light hover:font-medium text-off-white my-3 bg-(--dark-goldenrod)"
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