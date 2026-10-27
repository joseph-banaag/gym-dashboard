"use server";

import { redirect } from "next/navigation";
import { getCoachesCollection } from "@/lib/collections/coach";
import bcrypt from "bcryptjs";
import {
  createCoachSession,
  deleteCoachSession,
} from "@/lib/sessions/coach-session";

export type CoachLoginState = {
  errors?: {
    coachName?: string;
    coachPassword?: string;
  };
};

export async function login(
  _prevState: CoachLoginState,
  formData: FormData,
): Promise<CoachLoginState> {
  const coachName = String(formData.get("coachName") ?? "").trim();
  const coachPassword = String(formData.get("coachPassword") ?? "");
  const INVALID = "Invalid username or password. Try creating an account.";

  if (!coachName || !coachPassword) return { errors: { coachName: INVALID } };

  const coaches = await getCoachesCollection();
  const coach = await coaches.findOne(
    { coachName },
    { collation: { locale: "en", strength: 2 } },
  );

  if (!coach) return { errors: { coachName: INVALID } };

  const ok = await bcrypt.compare(coachPassword, coach.coachPasswordHashed);
  if (!ok) return { errors: { coachPassword: INVALID } };

  const coachId = coach._id!.toString();

  await createCoachSession(coachId, coach.role);
  redirect(`/coach/${coachId}`);
}

export async function logout() {
  await deleteCoachSession();
  redirect("/");
}