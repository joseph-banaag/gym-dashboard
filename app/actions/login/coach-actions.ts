"use server";

import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  console.log("username", username, password);

  redirect("/"); // will redirect to /coaches page once authentication and validations is done
}