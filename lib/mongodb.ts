import { MongoClient } from "mongodb";
import { attachDatabasePool } from "@vercel/functions";

const uri = process.env.GYM_MONGODB_URI;
if (!uri) throw new Error("Missing GYM_MONGODB_URI environment variable");

const options = {
  appName: "gym-dashboard",
  maxPoolSize: 10,
  maxIdleTimeMS: 5000,
  serverSelectionTimeoutMS: 5000,
};

const client = new MongoClient(uri, options);
attachDatabasePool(client);

export default client;