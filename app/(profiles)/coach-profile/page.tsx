import { redirect } from "next/navigation";
import { getCoachesCollection } from "@/lib/collections/coach";
import { ObjectId } from "mongodb";
import { getCoachSession } from "@/lib/sessions/coach-session";
import { logout } from "@/app/actions/login/coach-actions";

export default async function Page() {
  const coachSession = await getCoachSession();
  if (!coachSession) redirect("/coach");

  const coaches = await getCoachesCollection();
  const coach = coaches.findOne(
    { _id: new ObjectId(coachSession.coachId) },
    { projection: { coachPasswordHashed: 0 } },
  );

  if (!coach) redirect("/coach");

  return (
    <div>
      <div className="flex flex-col">
        this is the coach profile this will display all of coach&apos;s clients.
        {/* logout container */}
        <div>
          <form action={logout}>
            <button type="submit">Log out</button>
          </form>
        </div>
      </div>
    </div>
  );
}