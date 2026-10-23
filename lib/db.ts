import client from "@/lib/mongodb";

export async function getDb() {
  return client.db("gym-members");
}