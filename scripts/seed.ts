import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import { customers, users } from "@/lib/placeholder";

async function seed() {
  const uri = process.env.GYM_MONGODB_URI;
  if (!uri) throw new Error("Missing GYM_MONGODB_URI environment variable");

  const client = new MongoClient(uri);

  try {
    const db = client.db("gym-dashboard");
    const usersCol = db.collection("users");
    const customersCol = db.collection("customers");

    // Prevent duplicate emails
    await usersCol.createIndex({ email: 1 }, { unique: true });
    await customersCol.createIndex({ email: 1 }, { unique: true });

    // Users (with hashed passwords)
    await usersCol.bulkWrite(
      await Promise.all(
        users.map(async (user) => ({
          updateOne: {
            filter: { email: user.email },
            update: {
              $set: { ...user, password: await bcrypt.hash(user.password, 10) },
            },
            upsert: true,
          },
        })),
      ),
    );

    // Customers
    await customersCol.bulkWrite(
      customers.map((customer) => ({
        updateOne: {
          filter: { email: customer.email },
          update: { $set: customer },
          upsert: true,
        },
      })),
    );

    console.log(
      `Seeded ${users.length} user(s) and ${customers.length} customers`,
    );
  } finally {
    await client.close();
  }
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});