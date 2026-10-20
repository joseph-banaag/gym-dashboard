import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <span>this is the admin&apos;s profile</span>
      <Link href="/">Dash-bored</Link>
    </div>
  );
}