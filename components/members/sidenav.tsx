import { getSession } from "@/lib/sessions/member-session";
import Link from "next/link";
import { logout } from "@/app/actions/login/user-actions";

export default async function Sidenav() {
  const session = await getSession();
  if (!session) return null;

  const { memberId } = session;

  const memberNav = [
    {
      name: "Main",
      route: `/member/${memberId}`,
    },
    {
      name: "Workout plans",
      route: `/member/${memberId}/workouts`,
    },
    {
      name: "Gym Attendance",
      route: `/member/${memberId}/attenndance`,
    },
    {
      name: "See Progress",
      route: `/member/${memberId}/progress`,
    },
  ];

  return (
    <nav className="hidden lg:flex w-2/18 min-w-40 h-full border flex-col p-5 gap-2">
      {memberNav.map((nav) => (
        <Link key={nav.name} href={nav.route}>
          {nav.name}
        </Link>
      ))}
      <form action={logout}>
        <button
          type="submit"
          className="border px-2 py-1 rounded-lg cursor-pointer w-full flex items-start"
        >
          Log out
        </button>
      </form>
    </nav>
  );
}
