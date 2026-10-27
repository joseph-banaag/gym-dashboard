import { getOwnerSession } from "@/lib/sessions/owner-session";
import LandingPage from "@/components/ui/home/landing-page";

export default async function Page() {
  const session = await getOwnerSession();
  return (
    <>
      <LandingPage ownerIsHere={session !== null} />
    </>
  );
}
