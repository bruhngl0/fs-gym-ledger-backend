import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URL || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("connected to databasee")
} catch(e) {
  console.error(e);
}

let db = conn.db("mern_one");

export default db;

