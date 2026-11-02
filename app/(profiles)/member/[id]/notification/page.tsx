import { getMember } from "@/lib/dals/member";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const member = await getMember();
  const name = member?.username ?? "OFG";

  const username = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `${username} | Must check`,
  };
}

export default async function Page() {
  const member = await getMember();

  return (
    <div>
      All member&apos;s notification including: when the membership is about to
      expire, the set weekly visit. to update their progress{" "}
    </div>
  );
}
