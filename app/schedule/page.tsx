import Link from "next/link";

export default function ProgramSchedule() {
  return (
    <div className="flex flex-col gap-2">
      The overview of weekly programs/exercises
      <Link href="/dashboard">Go back to dashboard</Link>
    </div>
  );
}