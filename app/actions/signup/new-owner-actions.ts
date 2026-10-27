"use server";

import { getOwnerCollection } from "@/lib/collections/owner";
import bcrypt from "bcryptjs";
import { MongoServerError } from "mongodb";
import { createOwnerSession } from "@/lib/sessions/owner-session";
import { redirect } from "next/navigation";

const passwordPattern =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])[\x21-\x7E]{12,128}$/;
const usernamePattern = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export type OwnerFormState = {
  errors?: {
    ownerName?: string;
    ownerEmail?: string;
    ownerPassword?: string;
    ownerPasswordConfirm?: string;
  };
  values?: {
    ownerName?: string;
    ownerEmail?: string;
  };
  message?: string;
};

export async function createOwner(
  _prevState: OwnerFormState,
  formData: FormData,
): Promise<OwnerFormState> {
  const ownerName = String(formData.get("ownerName") ?? "").trim();
  const ownerEmail = String(formData.get("ownerEmail") ?? "").trim();
  const ownerPassword = String(formData.get("ownerPassword") ?? "");
  const ownerPasswordConfirm = String(
    formData.get("ownerPasswordConfirm") ?? "",
  );
  const INVALID_OWNER_CREDS =
    "Invalid credentials. Try recovering your account.";

  const errors: NonNullable<OwnerFormState["errors"]> = {};

  if (!usernamePattern.test(ownerName)) {
    errors.ownerName = "Please use your real name.";
  }

  if (!passwordPattern.test(ownerPassword)) {
    errors.ownerPassword =
      "Password must be 12–128 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character. Spaces are not allowed.";
  }

  if (ownerEmail.length > 254 || !emailPattern.test(ownerEmail)) {
    errors.ownerEmail = "Please enter a valid email address";
  }

  if (ownerPassword !== ownerPasswordConfirm) {
    errors.ownerPasswordConfirm = "Password must match confirm password.";
  }

  console.log("password: ", ownerPassword);
  console.log("confirm password: ", ownerPasswordConfirm);

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      values: { ownerName, ownerEmail },
    };
  }

  // database process

  const emailToLower = ownerEmail.toLowerCase();
  const ownerPasswordHashed = await bcrypt.hash(ownerPassword, 12);
  const owners = await getOwnerCollection();

  let ownerId: string;

  try {
    const result = await owners.insertOne({
      ownerName,
      ownerEmail: emailToLower,
      ownerPasswordHashed,
      role: "owner",
      ownerStatus: "active",
      createdAt: new Date(),
    });

    ownerId = result.insertedId.toString();
  } catch (e) {
    if (e instanceof MongoServerError && e.code === 11000) {
      if (e.keyPattern?.ownerEmail) {
        return { errors: { ownerEmail: INVALID_OWNER_CREDS } };
      }
      if (e.keyPattern?.ownerName) {
        return { errors: { ownerName: INVALID_OWNER_CREDS } };
      }
    }

    console.error("Signup failed.", e);
    return { message: "Something went wrong. Please try again." };
  }

  await createOwnerSession(ownerId, "owner");

  redirect(`/owner/${ownerId}`);
}

//VERIFYING EMAIL

//RESEND VERIFICATION CODE