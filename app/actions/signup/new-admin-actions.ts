"use server";

import { redirect } from "next/navigation";

const passwordPattern =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{12,128}$/;
const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export type FormState = {
  errors?: {
    adminName?: string;
    adminPassword?: string;
    adminEmail?: string;
    adminConfirmPassword?: string;
  };
  message?: string;
};

export async function newAdmin(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const username = String(formData.get("adminName") ?? "").trim();
  const password = String(formData.get("adminPassword") ?? "");
  const email = String(formData.get("adminEmail") ?? "").trim();
  const confirmPassword = String(formData.get("adminConfirmPassword") ?? "");

  const errors: NonNullable<FormState["errors"]> = {};

  if (!usernamePattern.test(username)) {
    errors.adminName =
      "Username must be 3-20 characters, start with a letter, and contain only letters, numbers, or underscores.";
  }

  if (!passwordPattern.test(password)) {
    errors.adminPassword =
      "Password must be 12-128 characters and include an uppercase letter, a lowercase letter, a number, and a special character.";
  }

  if (!emailPattern.test(email)) {
    errors.adminEmail = "Please enter a valid email address";
  }

  if (password !== confirmPassword) {
    errors.adminConfirmPassword = "Password must match confirm password";
  }

  if (Object.keys(errors).length > 0) {
    return { errors: errors };
  }

  // todo: create the user here (hash the password, save to DB, etc.)

  redirect("/admin-profile");
}