import { ObjectId } from "mongodb";
import { getDb } from "../mongodb/db";
import { planValue } from "@/lib/plans";

export interface Member {
  _id?: ObjectId;
  username: string;
  email: string;
  passwordHashed: string;
  role: "member";
  memberPlan: planValue;
  membershipStatus: "active" | "inactive";
  createdAt: Date;
}

export async function getMembersCollection() {
  const db = await getDb();
  return db.collection<Member>("members");
}