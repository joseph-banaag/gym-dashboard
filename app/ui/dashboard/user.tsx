import Link from "next/link";
import Image from "next/image";

export default function UserLoggedIn() {
  return (
    <div className="flex flex-col gap-2 p-1 pb-2">
      <hr className="border rounded-2xl  border-(--orange) dark:border-(--dark-goldenrod) w-full" />
      <Link
        href="/"
        className="flex justify-center items-center gap-2 p-3 text-foreground inset-shadow-sm/20 dark:text-(--off-white) rounded-xl inset-shadow-slate-500 transition delay-75 duration-150 ease-in-out hover:shadow-xl/40"
      >
        <div className="w-8 h-8 rounded-2xl flex justify-center items-center overflow-hidden border-foreground">
          <Image
            loading="eager"
            src="/profile.jpg"
            width={32}
            height={32}
            alt="User's profile photo"
            className="w-8 h-8"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="text-[10px] 2xl:text-xs text-nowrap">
            Doks Banaag
          </span>
          <span className="text-[9px] font-light">Admin</span>
        </div>
      </Link>
    </div>
  );
}
