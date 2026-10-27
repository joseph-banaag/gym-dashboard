"use server";

import { redirect } from "next/navigation";
import { getCoachesCollection } from "@/lib/collections/coach";
import bcrypt from "bcryptjs";
import { MongoServerError } from "mongodb";
import { createCoachSession } from "@/lib/sessions/coach-session";

const passwordPattern =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])[\x21-\x7E]{12,128}$/;
const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export type FormState = {
  errors?: {
    coachName?: string;
    coachEmail?: string;
    coachPassword?: string;
    coachConfirmPassword?: string;
  };
  values?: {
    coachName?: string;
    coachEmail?: string;
  };
  message?: string;
};

export async function newCoach(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const coachName = String(formData.get("coachName") ?? "").trim();
  const coachPassword = String(formData.get("coachPassword") ?? "");
  const coachConfirmPassword = String(
    formData.get("coachConfirmPassword") ?? "",
  );
  const coachEmail = String(formData.get("coachEmail") ?? "").trim();
  const INVALID_CREDS = "Invalid credentials. Try recovering your account.";

  const errors: NonNullable<FormState["errors"]> = {};

  if (!usernamePattern.test(coachName)) {
    errors.coachName =
      "Username must be 3-20 characters, start with a letter, and contain only letters, numbers, or underscores.";
  }

  if (!passwordPattern.test(coachPassword)) {
    errors.coachPassword =
      "Password must be 12–128 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character. Spaces are not allowed.";
  }

  if (!emailPattern.test(coachEmail)) {
    errors.coachEmail = "Please enter a valid email address";
  }

  if (coachPassword !== coachConfirmPassword) {
    errors.coachConfirmPassword = "Password must match confirm password";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      values: { coachName, coachEmail },
    };
  }

  const coachEmailLower = coachEmail.toLowerCase();
  const coachPasswordHashed = await bcrypt.hash(coachPassword, 12);
  const coaches = await getCoachesCollection();

  let coachId: string;

  try {
    const result = await coaches.insertOne({
      coachName,
      coachEmail: coachEmailLower,
      coachPasswordHashed,
      role: "coach",
      membershipStatus: "active",
      created_at: new Date(),
    });

    coachId = result.insertedId.toString();
  } catch (e) {
    if (e instanceof MongoServerError && e.code === 11000) {
      if (e.keyPattern?.coachEmail) {
        return { errors: { coachEmail: INVALID_CREDS } };
      }
      if (e.keyPattern?.coachName) {
        return { errors: { coachName: INVALID_CREDS } };
      }
    }
    console.error("Signup failed.", e);
    return { message: "Something went wrong. Please try again." };
  }

  await createCoachSession(coachId, "coach");

  redirect("/coach-profile");
}

//VERIFYING EMAIL

//RESEND VERIFICATION CODE