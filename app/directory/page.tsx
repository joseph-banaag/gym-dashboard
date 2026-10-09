import Link from "next/link";

export default function MembersDirectory() {
  return (
    <div className="flex flex-col gap-2">
      contact information of gym members
      <Link href="/dashboard">Got back to daks-bored</Link>
    </div>
  );
}