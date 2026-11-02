import { getMember } from "@/lib/dals/member";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const member = await getMember();
  const name = member?.username ?? "OFG";

  const username = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `${username} | Gym visits`,
  };
}
export default async function Page() {
  const member = await getMember();

  return (
    <>
      <main>this is the members attendance page</main>
    </>
  );
}
