import { getMember } from "@/lib/dals/member";

export default async function Page() {
  const member = await getMember();
  return (
    <>
      <div>This is where the member can change their profile settings.</div>
    </>
  );
}
