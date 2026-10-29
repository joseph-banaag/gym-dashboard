import Image from "next/image";

export function UserImage() {
  return (
    <>
      <Image
        loading="eager"
        src="/profile.jpg"
        width={30}
        height={30}
        alt="User's profile photo"
        className="object-cover"
      />
      ;
    </>
  );
}

const currentUser = "Doks Banaag";
const userDesignation = "Admin";

export function UserName() {
  return (
    <>
      <span className="text-[11px] text-nowrap">{currentUser}</span>
    </>
  );
}

export function UserDesignation() {
  return (
    <>
      <span className="text-[9px] font-light">{userDesignation}</span>
    </>
  );
}
