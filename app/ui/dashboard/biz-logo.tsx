import Image from "next/image";

export default function BusinessLogo() {
  return (
    <>
      <div className="p-2 flex flex-col justify-center items-center ">
        <Image
          loading="eager"
          src="/oppa.png"
          width={75}
          height={75}
          alt="Oppa fitness gym logo"
          className="w-18.75 h-18.75"
        />
        <span className="text-xs font-medium text-foreground dark:text-(--off-white)">
          Oppa Fitness Gym
        </span>
      </div>
    </>
  );
}

export const BusinessLogoMobile = () => {
  return (
    <div className="p-2 flex flex-col justify-center items-center ">
      <Image
        loading="eager"
        src="/oppa.png"
        width={50}
        height={50}
        alt="Oppa fitness gym logo"
        className="w-12.5 h-12.5"
      />
      <span className="text-xs font-light text-foreground dark:text-(--off-white)">
        Oppa Fitness Gym
      </span>
    </div>
  );
};
