"use server";

import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  console.log(username, password);

  // validate, check against DB, hash compare, set session cookie...

  redirect("/"); // will redirect to /users once the authentication and validation is done
}

// TODO: redirect users to create-new-users users account page if no account has created yet.