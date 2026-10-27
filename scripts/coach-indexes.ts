import client from "@/lib/mongodb/mongodb";

async function main() {
  const coaches = client.db("gym-members").collection("coaches");
  await coaches.createIndex({ coachEmail: 1 }, { unique: true });
  await coaches.createIndex(
    { coachName: 1 },
    { unique: true, collation: { locale: "en", strength: 2 } },
  );

  console.log("indexes created");
  await client.close();
}

main();