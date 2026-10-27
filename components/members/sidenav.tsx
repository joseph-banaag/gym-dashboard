import { getSession } from "@/lib/sessions/member-session";
import Link from "next/link";
import { logout } from "@/app/actions/login/user-actions";

export default async function Sidenav() {
  const session = await getSession();
  if (!session) return null;

  const { memberId } = session;

  return (
    <nav className="hidden lg:flex w-2/18 min-w-40 h-full border flex-col items-center">
      <Link href={`/member/${memberId}`}>Home</Link>
      <Link href={`/member/${memberId}/workouts`}>Go to workouts</Link>
      <Link href={`/member/${memberId}/attendance/`}>Go to attendance</Link>
      <Link href={`/member/${memberId}/progress/`}>See progress</Link>
      <div className="flex flex-col">
        <form action={logout}>
          <button type="submit">Log out</button>
        </form>
      </div>
    </nav>
  );
}
