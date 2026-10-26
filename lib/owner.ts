import { ObjectId } from "mongodb";
import { getDb } from "@/lib/db";

export interface Owner {
  _id?: ObjectId;
  ownerName: string;
  ownerEmail: string;
  ownerPasswordHashed: string;
  role: "owner";
  ownerStatus: "active" | "inactive" | "vacation";
  createdAt: Date;
}

export async function getOwnerCollection() {
  const db = await getDb();
  return db.collection<Owner>("owners");
}