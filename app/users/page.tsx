import Link from "next/link";

export default function UsersPage() {
  return (
    <div>
      <div className="border">welcome back, madafaka!</div>
      <Link href="/">Log out</Link>
    </div>
  );
}