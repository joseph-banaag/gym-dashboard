import client from "@/lib/mongodb/mongodb";

export async function getDb() {
  return client.db("gym-members");
}