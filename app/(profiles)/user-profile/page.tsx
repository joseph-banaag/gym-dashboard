import Link from "next/link";

export default function UsersPage() {
  return (
    <div>
      <div className="border">this is the user&apos;s profile</div>
      <Link href="/">Log out</Link>
    </div>
  );
}