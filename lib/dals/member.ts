import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/sessions/member-session";
import { getMembersCollection } from "@/lib/collections/members";
import { ObjectId } from "mongodb";

export const requireMember = cache(async () => {
  const session = await getSession();
  if (!session) redirect("/login/member");
  return session;
});

export const getMember = cache(async () => {
  const member = await requireMember();

  const members = await getMembersCollection();
  return await members.findOne(
    { _id: new ObjectId(member.memberId) },
    { projection: { passwordHashed: 0 } }, // this line prevents db to display the stored password.
  );
});
