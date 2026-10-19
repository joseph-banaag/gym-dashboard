"use server";

import { redirect } from "next/navigation";

export async function newAdmin(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  console.log(username, password);

  redirect("/"); // will redirect to /dashboard once the authentication and validation is done
}