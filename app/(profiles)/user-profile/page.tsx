import { getSession } from "@/lib/member-session";
import { redirect } from "next/navigation";
import { getMembersCollection } from "@/lib/members";
import { ObjectId } from "mongodb";
import { logout } from "@/app/actions/login/user-actions";

export default async function UsersPage() {
  const session = await getSession();
  if (!session) redirect("/user");

  const members = await getMembersCollection();
  const member = await members.findOne(
    { _id: new ObjectId(session.memberId) },
    { projection: { passwordHashed: 0 } },
  );

  if (!member) redirect("/user");

  return (
    <div>
      <div className="border">this is the user&apos;s profile</div>

      {/*  logout container */}
      <div>
        <form action={logout}>
          <button type="submit">Log out</button>
        </form>
      </div>
    </div>
  );
}