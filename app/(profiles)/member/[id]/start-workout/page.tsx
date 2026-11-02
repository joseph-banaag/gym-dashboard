import { Metadata } from "next";
import { getMember } from "@/lib/dals/member";

export async function generateMetadata(): Promise<Metadata> {
  const member = await getMember();
  const name = member?.username ?? "OFG";

  const username = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `${username} | Current workout`,
  };
}

export default function Page() {
  return (
    <div>
      <span>this is the start workout page</span>
    </div>
  );
}
