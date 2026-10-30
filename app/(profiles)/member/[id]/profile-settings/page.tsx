import { getMember } from "@/lib/dals/member";
import { Metadata } from "next";

const username: string = "Doks";

export const metadata: Metadata = {
  title: `${username} | Profile Settings`,
};

export default async function Page() {
  const member = await getMember();
  return (
    <>
      <div>This is where the member can change their profile settings.</div>
    </>
  );
}
