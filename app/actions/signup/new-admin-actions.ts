"use server";

import { redirect } from "next/navigation";
import { getAdminsCollection } from "@/lib/admin";
import bcrypt from "bcryptjs";
import { MongoServerError } from "mongodb";
import { createAdminSession } from "@/lib/admin-session";

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
  values?: {
    adminName?: string;
    adminEmail?: string;
  };
  message?: string;
};

export async function newAdmin(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const adminName = String(formData.get("adminName") ?? "").trim();
  const adminPassword = String(formData.get("adminPassword") ?? "");
  const adminEmail = String(formData.get("adminEmail") ?? "").trim();
  const adminConfirmPassword = String(
    formData.get("adminConfirmPassword") ?? "",
  );
  const INVALID_ACCOUNT = "Invalid credentials. Try recovering your account";

  const errors: NonNullable<FormState["errors"]> = {};

  if (!usernamePattern.test(adminName)) {
    errors.adminName =
      "Username must be 3-20 characters, start with a letter, and contain only letters, numbers, or underscores.";
  }

  if (!passwordPattern.test(adminPassword)) {
    errors.adminPassword =
      "Password must be 12-128 characters and include an uppercase letter, a lowercase letter, a number, and a special character.";
  }

  if (!emailPattern.test(adminEmail)) {
    errors.adminEmail = "Please enter a valid email address";
  }

  if (adminPassword !== adminConfirmPassword) {
    errors.adminConfirmPassword = "Password must match confirm password";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      values: { adminName, adminEmail },
    };
  }

  const adminEmailLower = adminEmail.toLowerCase();
  const adminPasswordHashed = await bcrypt.hash(adminPassword, 12);
  const admins = await getAdminsCollection();

  let adminId: string;

  try {
    const result = await admins.insertOne({
      adminName,
      adminEmail: adminEmailLower,
      adminPasswordHashed,
      role: "admin",
      membershipStatus: "active",
      created_at: new Date(),
    });

    adminId = result.insertedId.toString();
  } catch (e) {
    if (e instanceof MongoServerError && e.code === 11000) {
      if (e.keyPattern?.adminEmail) {
        return { errors: { adminEmail: INVALID_ACCOUNT } };
      }
      if (e.keyPattern?.adminName) {
        return { errors: { adminName: INVALID_ACCOUNT } };
      }
    }
    console.error("Signup failed. ", e);
    return { message: "Something went wrong. Please try again." };
  }

  await createAdminSession(adminId, "admin");
  redirect("/admin-profile");
}