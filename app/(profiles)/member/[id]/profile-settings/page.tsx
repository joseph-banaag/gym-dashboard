import { getMember } from "@/lib/dals/member";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const member = await getMember();
  const name = member?.username ?? "OFG";

  const username = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `${username} | Profile settings`,
  };
}

export default async function Page() {
  const member = await getMember();
  return (
    <>
      <div>This is where the member can change their profile settings.</div>
    </>
  );
}
