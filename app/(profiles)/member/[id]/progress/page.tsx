import { getMember } from "@/lib/dals/member";

export default async function Page() {
  const member = await getMember();

  return (
    <>
      <main>this is the members progress page</main>
    </>
  );
}
