import client from "@/lib/mongodb/mongodb";

async function main() {
  const owners = client.db("gym-members").collection("owners");
  await owners.createIndex({ ownerEmail: 1 }, { unique: true });
  await owners.createIndex(
    { ownerName: 1 },
    { unique: true, collation: { locale: "en", strength: 2 } },
  );

  console.log("owner indexes created.");
  await client.close();
}

main();