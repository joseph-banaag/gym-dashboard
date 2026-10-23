import client from "@/lib/mongodb";

async function main() {
  const members = client.db("gym-members").collection("members");
  await members.createIndex({ email: 1 }, { unique: true });
  await members.createIndex(
    { username: 1 },
    { unique: true, collation: { locale: "en", strength: 2 } },
  );

  console.log("indexes created");
  await client.close();
}

main();