import Image from "next/image";
import {
  Cog8ToothIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function UserProfile() {
  return (
    <div className="absolute bottom-1 left-1 h-64 w-55 border border-(--dim-grey)/20 rounded-2xl flex  flex-col items-start backdrop-blur-sm text-shadow-lg/30 px-3 py-6 gap-2">
      <div className="flex gap-2  p-3 border border-(--dim-grey)/30 rounded-lg w-full">
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
      </div>
      <div className="border  p-3 flex items-center gap-2 border-(--dim-grey)/30 rounded-lg w-full">
        <span className="w-5 h-5">
          <Cog8ToothIcon />
        </span>
        <span className="text-xs font-light">Profile settings</span>
      </div>
      <div className="border  p-3 flex items-center gap-2 border-(--dim-grey)/30 rounded-lg w-full">
        <span className="w-5 h-5">
          <ArrowLeftStartOnRectangleIcon />
        </span>
        <Link href="/" className="text-xs font-light">
          Logout
        </Link>
      </div>
    </div>
  );
}
