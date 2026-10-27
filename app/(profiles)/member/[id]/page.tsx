import { getSession } from "@/lib/sessions/member-session";
import { redirect } from "next/navigation";
import { getMembersCollection } from "@/lib/collections/members";
import { ObjectId } from "mongodb";

export default async function UsersPage() {
  const session = await getSession();
  if (!session) redirect("/login/member");

  const members = await getMembersCollection();
  const member = await members.findOne(
    { _id: new ObjectId(session.memberId) },
    { projection: { passwordHashed: 0 } }, // this prevents the db to send the passwordHashed information
  );

  if (!member) redirect("/login/member");

  return (
    <div className="w-full h-full border">
      <div className="">this is the user&apos;s profile</div>
    </div>
  );
}
