import { getMember } from "@/lib/dals/member";

export default async function UsersPage() {
  const member = await getMember();

  console.log("MEMBERS FROM DAL: ", member); // remove this once the information is used.

  return (
    <div className="w-full h-full border">
      <div className="">this is the user&apos;s profile</div>
    </div>
  );
}
