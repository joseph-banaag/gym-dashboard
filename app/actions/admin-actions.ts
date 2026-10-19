"use server";

import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  console.log(username, password);

  // validate, check against DB, hash compare, set session cookie...

  redirect("/dashboard");
}