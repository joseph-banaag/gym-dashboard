import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb/db";

export interface Coach {
  _id?: ObjectId;
  coachName: string;
  coachEmail: string;
  coachPasswordHashed: string;
  role: "coach";
  membershipStatus: "active" | "inactive";
  created_at: Date;
}

export async function getCoachesCollection() {
  const db = await getDb();
  return db.collection<Coach>("coaches");
}