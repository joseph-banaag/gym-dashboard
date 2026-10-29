import { BellIcon } from "@heroicons/react/24/outline";
import "@/app/globals.css";
import { clsx } from "clsx";
import Link from "next/link";
import { getMember } from "@/lib/dals/member";

export default async function Notification() {
  const member = await getMember();
  const id = member?._id.toString();

  const hasNotif = true;
  // create a function that will get all the possible notification for the members. try to keep the file in a server component as much as possible.

  return (
    <Link
      href={clsx(`${hasNotif ? `/member/${id}/notification` : ""}`)}
      className="w-5 relative cursor-pointer"
    >
      <BellIcon />
      <span className={clsx(hasNotif ? "block" : "hidden")}>
        <span className="absolute  border-3 border-(--sunflower-gold) rounded-full top-0  right-0 animate-ping" />
        <span className="absolute  border-3 border-(--harvest-gold) rounded-full top-0  right-0" />
      </span>
    </Link>
  );
}
