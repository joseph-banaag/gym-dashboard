"use server";

import { redirect } from "next/navigation";

const passwordPattern =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{12,128}$/;
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
  message?: string;
};

export async function newUser(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");
  const email = String(formData.get("email") ?? "").trim();
  const memberPlan = String(formData.get("memberPlan") ?? "");
  const role = "member";

  console.log("members plan:", memberPlan);

  const errors: NonNullable<FormState["errors"]> = {};

  if (!usernamePattern.test(username)) {
    errors.username =
      "Username must be 3-20 characters, start with a letter, and contain only letters, numbers, or underscores.";
  }

  if (!passwordPattern.test(password)) {
    errors.password =
      "Password must be 12-128 characters and include an uppercase letter, a lowercase letter, a number, and a special character.";
  }

  if (email.length > 254 || !emailPattern.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Password must match confirm password";
  }

  if (memberPlan === "default") {
    errors.memberPlan = "Select the correct membership plan";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // todo: create the user here (hash the password, save to DB, etc.)

  redirect("/user-profile");
}

// TODO: create an automated userId maker when user created their account base on year. for example Uid202634: 34th
//  member in 2026

//members information:
//userId:
//username:
//email:
//password: hashed
//planId: daily | b-week | monthly
// role: member |coach | admin | owner

// TODO: USE DIFFERENT DATABASE FOR USERS, COACH, ADMIN, OWNER

const dataStructure = {
  _id: 1,
  userId: "U202634",
  username: "doks",
  email: "doks@gmail.com",
  password: "hashedPassword",
  plan: ["daily plan", "2-week plan", "monthly plan"],
  role: ["member", "admin", "coach"],
};