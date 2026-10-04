import Image from "next/image";

export function UserImage() {
  return (
    <>
      <Image
        loading="eager"
        src="/profile.jpg"
        width={32}
        height={32}
        alt="User's profile photo"
        className="w-8 h-8"
      />
      ;
    </>
  );
}

const currentUser = "Doks Banaag";
const userDesignate = "Admin";

export function UserName() {
  return (
    <>
      <span className="text-[10px] 2xl:text-xs text-nowrap">{currentUser}</span>
    </>
  );
}

export function UserDesignation() {
  return (
    <>
      <span className="text-[9px] font-light">{userDesignate}</span>
    </>
  );
}
