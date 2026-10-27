import client from "@/lib/mongodb/mongodb";

async function main() {
  const admins = client.db("gym-members").collection("admins");
  await admins.createIndex({ adminEmail: 1 }, { unique: true });
  await admins.createIndex(
    { adminName: 1 },
    { unique: true, collation: { locale: "en", strength: 2 } },
  );

  console.log("admin indexes created");
  await client.close();
}

main();