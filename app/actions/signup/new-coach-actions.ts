"use server";

import { redirect } from "next/navigation";

const passwordPattern =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{12,128}$/;
const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export type FormState = {
  errors?: {
    coachName?: string;
    coachEmail?: string;
    coachPassword?: string;
    coachConfirmPassword?: string;
  };
  message?: string;
};

export async function newCoach(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const coachName = String(formData.get("coachName") ?? "").trim();
  const password = String(formData.get("coachPassword") ?? "");
  const confirmPassword = String(formData.get("coachConfirmPassword") ?? "");
  const email = String(formData.get("coachEmail") ?? "").trim();
  const role = "coach";

  const errors: NonNullable<FormState["errors"]> = {};

  if (!usernamePattern.test(coachName)) {
    errors.coachName =
      "Username must be 3-20 characters, start with a letter, and contain only letters, numbers, or underscores.";
  }

  if (!passwordPattern.test(password)) {
    errors.coachPassword =
      "Password must be 12-128 characters and include an uppercase letter, a lowercase letter, a number, and a special character.";
  }

  if (!emailPattern.test(email)) {
    errors.coachEmail = "Please enter a valid email address";
  }

  if (password !== confirmPassword) {
    errors.coachConfirmPassword = "Password must match confirm password";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // todo: create the user here (hash the password, save to DB, etc.)

  redirect("/coach-profile");
}