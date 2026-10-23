import { ObjectId } from "mongodb"; // import {getDb} from "@/lib/db";
import { getDb } from "@/lib/db";

export interface Admin {
  _id?: ObjectId;
  adminName: string;
  adminEmail: string;
  adminPasswordHashed: string;
  role: "admin";
  created_at: Date;
}

export async function getAdminsCollection() {
  const db = await getDb();
  return db.collection<Admin>("admins");
}