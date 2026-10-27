import { getOwnerSession } from "@/lib/sessions/owner-session";

export default async function EnableBtn() {
  const session = await getOwnerSession();
  const ownerIsHere: boolean = session !== null;

  return <></>;
}