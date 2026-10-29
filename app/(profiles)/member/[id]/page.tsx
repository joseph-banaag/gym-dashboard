import { getMember } from "@/lib/dals/member";

export default async function UsersPage() {
  const member = await getMember();

  // console.log("MEMBERS FROM DAL: ", member); // remove this once the information is used.

  return (
    <main className="w-full h-full">
      <div className="h-45">this is the user&apos;s profile</div>
      <div className="h-screen"></div>
    </main>
  );
}
