import Link from "next/link";
import { logout } from "@/app/actions/login/owner-actions";

export default function OwnerPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>welcome to the owners page!</h2>
      <Link href="/">home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <form action={logout}>
        <button type="submit">logout</button>
      </form>
    </div>
  );
}
