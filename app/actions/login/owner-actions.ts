"use server";

import { getOwnerCollection } from "@/lib/collections/owner";
import bcrypt from "bcryptjs";
import {
  createOwnerSession,
  deleteOwnerSession,
} from "@/lib/sessions/owner-session";
import { redirect } from "next/navigation";

export type OwnerLoginState = {
  errors?: {
    ownerName?: string;
    ownerPassword?: string;
  };
};

export async function login(
  _prevState: OwnerLoginState,
  formData: FormData,
): Promise<OwnerLoginState> {
  const ownerName = String(formData.get("ownerName") ?? "").trim();
  const ownerPassword = String(formData.get("ownerPassword") ?? "");
  const INVALID_MSG = "Invalid username or password. Try creating an account.";

  if (!ownerName || !ownerPassword)
    return { errors: { ownerName: INVALID_MSG } };

  const owners = await getOwnerCollection();
  const owner = await owners.findOne(
    { ownerName },
    { collation: { locale: "en", strength: 2 } },
  );

  if (!owner) return { errors: { ownerName: INVALID_MSG } };

  const ok = await bcrypt.compare(ownerPassword, owner.ownerPasswordHashed);
  if (!ok) return { errors: { ownerPassword: INVALID_MSG } };

  await createOwnerSession(owner._id!.toString(), owner.role);
  redirect("/dashboard");
}

export async function logout() {
  await deleteOwnerSession();
  redirect("/");
}