import { getSession } from "@/lib/sessions/member-session";
import { redirect } from "next/navigation";
import { getMembersCollection } from "@/lib/collections/members";
import { ObjectId } from "mongodb";
import { logout } from "@/app/actions/login/user-actions";

export default async function UsersPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("ID value is: ", id);
  console.log("ID type: ", typeof id);

  const session = await getSession();
  if (!session) redirect("/login/member");

  const members = await getMembersCollection();
  const member = await members.findOne(
    { _id: new ObjectId(session.memberId) },
    { projection: { passwordHashed: 0 } },
  );

  if (!member) redirect("/login/member");

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