import { getMember } from "@/lib/dals/member";
import { Metadata } from "next";

const username: string = "Doks";

export const metadata: Metadata = {
  title: `${username} | Notifications`,
};

export default async function Page() {
  const member = await getMember();

  return (
    <div>
      All member&apos;s notification including: when the membership is about to
      expire, the set weekly visit. to update their progress{" "}
    </div>
  );
}
