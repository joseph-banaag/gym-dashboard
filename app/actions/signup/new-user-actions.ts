"use server";

import { redirect } from "next/navigation";

export async function newUser(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  // todo: add the creation date when saving the data to the database

  console.log(username, password);

  // validate, check against DB, hash compare, set session cookie...

  redirect("/"); // will redirect to /users once the authentication and validation is done
}