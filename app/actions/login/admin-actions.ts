"use server";

import { redirect } from "next/navigation";
import { getAdminsCollection } from "@/lib/collections/admin";
import bcrypt from "bcryptjs";
import {
  createAdminSession,
  deleteAdminSession,
} from "@/lib/sessions/admin-session";

export type AdminLoginState = {
  errors?: {
    adminName?: string;
    adminPassword?: string;
  };
};

export async function login(
  _prevState: AdminLoginState,
  formData: FormData,
): Promise<AdminLoginState> {
  const adminName = String(formData.get("adminName") ?? "").trim();
  const adminPassword = String(formData.get("adminPassword") ?? "");
  const INVALID_ACCOUNT =
    "Invalid username or password. Try creating an account.";

  if (!adminName || !adminPassword)
    return {
      errors: { adminName: INVALID_ACCOUNT },
    };

  const admins = await getAdminsCollection();
  const admin = await admins.findOne(
    { adminName },
    { collation: { locale: "en", strength: 2 } },
  );

  if (!admin)
    return {
      errors: { adminName: INVALID_ACCOUNT },
    };

  const ok = await bcrypt.compare(adminPassword, admin.adminPasswordHashed);
  if (!ok)
    return {
      errors: { adminPassword: INVALID_ACCOUNT },
    };

  await createAdminSession(admin._id!.toString(), admin.role);
  redirect("/admin-profile");
}

export async function logout() {
  await deleteAdminSession();
  redirect("/");
}