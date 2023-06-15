import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  //Executing the Query
  const db = client.db("Vishal");
  const messageColl = db.collection("message");
  await messageColl.insertOne({ message: "Hi I am Vishal" });
//Close the Connection
  await client.close();
  console.log("Record Added");
}

main();
