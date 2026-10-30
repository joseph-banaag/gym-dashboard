import { getMember } from "@/lib/dals/member";
import { Metadata } from "next";

const username: string = "Doks";

export const metadata: Metadata = {
  title: `${username} | Progress`,
};

export default async function Page() {
  const member = await getMember();

  return (
    <>
      <main>this is the members progress page</main>
    </>
  );
}
