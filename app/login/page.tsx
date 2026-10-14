import Image from "next/image";
import Form from "next/form";

export default function LoginPage() {
  return (
    <div className="w-sceen h-screen absolute inset-0 bg-(--primary-scarlet) bg-radial-[at_75%_90%] from-(--deep-crimson) via-(--primary-scarlet) to-(--deep-crimson) to-95% text-(--off-white)">
      <div className="size-full flex flex-col justify-center items-center backdrop-blur-xs">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/oppa.png"
              alt="Oppat fitness gym logo"
              width={180}
              height={180}
            />
            <span className="text-md font-semibold text-shadow-lg/20">
              Oppa Fitness Gym
            </span>
          </div>
          <div className="mt-5 sm:mt-10 bg-(--carbon-black)/40 backdrop-blur-sm inset-shadow-slate-500 shadow-xl/30 inset-shadow-sm/20 rounded-xl border-2 border-r-0 border-l-0 border-dim-grey-overlay pt-3 px-2 sm:px-4 gap-2 text-(--off-white)">
            <Form
              scroll={true}
              action="/login"
              className="flex flex-col justify-center items-center gap-8 p-3"
            >
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="border border-t-0 border-r-0 border-l-0 border-(--orange)/80"
              />
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="border border-t-0 border-r-0 border-l-0 border-(--orange)/80"
              />
              <button
                type="submit"
                className="border-dim-grey-overlay rounded-lg px-2 py-1 hover:shadow-xl/30 transition delay-75 duration-200 ease-in-out inset-shadow-sm/20 inset-shadow-slate-500 shadow-xl/20 backdrop-blur-xs hover:border-white/30 text-[13px] font-light hover:font-medium text-(--offwhite) my-3"
              >
                Continue
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}