import { getAdminSession } from "@/lib/admin-session";
import { redirect } from "next/navigation";
import { getAdminsCollection } from "@/lib/admin";
import { ObjectId } from "mongodb";
import { logout } from "@/app/actions/login/admin-actions";

export default async function Page() {
  const adminSession = await getAdminSession();
  if (!adminSession) redirect("/admin");

  const admins = await getAdminsCollection();
  const admin = admins.findOne(
    { _id: new ObjectId(adminSession.adminId) },
    { projection: { adminPasswordHashed: 0 } },
  );

  if (!admin) redirect("/admin");

  return (
    <div className="flex flex-col">
      <span>this is the admin&apos;s profile</span>

      {/*  logout container */}
      <div>
        <form action={logout}>
          <button type="submit">Log out</button>
        </form>
      </div>
    </div>
  );
}