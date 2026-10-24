"use server";

import { redirect } from "next/navigation";
import { getMembersCollection } from "@/lib/members";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "@/lib/session";

export type LoginState = {
  errors?: {
    username?: string;
    password?: string;
  };
};

export async function login(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const INVALID = "Invalid username or password. Try creating an account.";

  if (!username || !password) return { errors: { username: INVALID } };

  const members = await getMembersCollection();
  const member = await members.findOne(
    { username },
    { collation: { locale: "en", strength: 2 } },
  );

  if (!member) return { errors: { username: INVALID } };

  const ok = await bcrypt.compare(password, member.passwordHashed);
  if (!ok) return { errors: { password: INVALID } };

  await createSession(member._id!.toString(), member.role);
  redirect("/user-profile");
}

export async function logout() {
  await deleteSession();
  redirect("/");
}