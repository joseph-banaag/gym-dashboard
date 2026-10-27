import "server-only";
import { cache } from "react";
import { getOwnerSession } from "@/lib/sessions/owner-session";
import { redirect } from "next/navigation";

export const requireOwner = cache(async () => {
  const session = await getOwnerSession();
  if (!session) redirect("/owner");
  return session;
});

export async function getAllAdmins() {
  await requireOwner();
  //  create function here like getting database information and use it the to sever components that needs it
}

export async function getAllCoaches() {
  await requireOwner();
  //  create function here like getting database information and use it the to sever components that needs it
}

export async function getAllMembers() {
  await requireOwner();
  //  create function here like getting database information and use it the to sever components that needs it
}