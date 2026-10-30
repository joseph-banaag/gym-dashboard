import { redirect } from "next/navigation";
import { getSession } from "@/lib/sessions/member-session";
import { Metadata } from "next";

const username: string = "Doks";

export const metadata: Metadata = {
  title: `${username} | Workout plans`,
};
export default async function Page() {
  const session = await getSession();
  if (!session) redirect("/login/member");

  return (
    <>
      <main>This is the members workouts page</main>
    </>
  );
}
