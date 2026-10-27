"use server";

import { redirect } from "next/navigation";
import { getMembersCollection } from "@/lib/collections/members";
import bcrypt from "bcryptjs";
import { INCLUDE_PLANS } from "@/lib/plans";
import { MongoServerError } from "mongodb";
import { createSession } from "@/lib/sessions/member-session";

const passwordPattern =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])[\x21-\x7E]{12,128}$/;
const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export type FormState = {
  errors?: {
    username?: string;
    password?: string;
    email?: string;
    confirmPassword?: string;
    memberPlan?: string;
  };
  values?: {
    username?: string;
    email?: string;
  };
  message?: string;
};

// MEMBER'S ACTION
export async function newUser(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");
  const email = String(formData.get("email") ?? "").trim();
  const memberPlan = String(formData.get("memberPlan") ?? "");
  const INVALID_CREDENTIALS =
    "Invalid credentials. Try recovering your account.";

  const errors: NonNullable<FormState["errors"]> = {};

  if (!usernamePattern.test(username)) {
    errors.username =
      "Username must be 3-20 characters, start with a letter, and contain only letters, numbers, or underscores.";
  }

  if (!passwordPattern.test(password)) {
    errors.password =
      "Password must be 12–128 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character. Spaces are not allowed.";
  }

  if (email.length > 254 || !emailPattern.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Password must match confirm password";
  }

  if (!INCLUDE_PLANS.includes(memberPlan)) {
    errors.memberPlan = "Select the correct membership plan";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      values: { username, email },
    };
  }

  const emailLower = email.toLowerCase();
  const passwordHashed = await bcrypt.hash(password, 12);
  const members = await getMembersCollection();

  let memberId: string;

  try {
    const result = await members.insertOne({
      username,
      email: emailLower,
      passwordHashed,
      role: "member",
      memberPlan,
      membershipStatus: "active",
      createdAt: new Date(),
    });

    memberId = result.insertedId.toString();
  } catch (e) {
    if (e instanceof MongoServerError && e.code === 11000) {
      if (e.keyPattern?.email) {
        return { errors: { email: INVALID_CREDENTIALS } };
      }
      if (e.keyPattern?.username) {
        return { errors: { username: INVALID_CREDENTIALS } };
      }
    }
    console.error("Signup failed.", e);
    return { message: "Something went wrong. Please try again." };
  }

  await createSession(memberId, "member");

  redirect("/user-profile");
}

//VERIFYING EMAIL

//RESEND VERIFICATION CODE