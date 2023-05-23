import {MongoClient} from "mongodb";

const connectionString = process.env.ATLAS_URL || "";

const client = new MongoClient(connectionString);


let db;

async function connectedToDatabase(){
try{
    await client.connect();
    console.log("connected to database");
    db = client.db("gym_members");
}catch(error){
    console.error("not connected to the database". error)
}
}

connectedToDatabase()

export default db