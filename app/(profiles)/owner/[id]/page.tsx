import Link from "next/link";

export default function OwnerPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>welcome to the owners page!</h2>
      <Link href="/">home</Link>
    </div>
  );
}
