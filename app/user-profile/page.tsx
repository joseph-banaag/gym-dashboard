import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <span>this is the user&apos;s page. madafaka!</span>
      <Link href="/dashboard">Dash-bored</Link>
    </div>
  );
}
