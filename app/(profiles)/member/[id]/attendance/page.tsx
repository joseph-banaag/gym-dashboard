import { redirect } from "next/navigation";
import { getSession } from "@/lib/sessions/member-session";

export default async function Page() {
  const session = await getSession();
  if (!session) redirect("/login/member");

  return (
    <>
      <main>this is the members attendance page</main>
    </>
  );
}
