import { getMember } from "@/lib/dals/member";

export default async function Page() {
  const member = await getMember();

  return (
    <div>
      All member&apos;s notification including: when the membership is about to
      expire, the set weekly visit. to update their progress{" "}
    </div>
  );
}
