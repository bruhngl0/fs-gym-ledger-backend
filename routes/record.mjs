import express from "express";
import db from "../db/conn.mjs";
import {ObjectId} from "mongodb";  //helps to create a unique id of each document in database.


const router = express.Router(); 

//In the above code, express.Router() method is called to create a new router
// object, which is assigned to the router variable.The router object returned by express.Router() 
//provides several methods to define routes and middleware, 
//which include router.get, router.post, etc...

router.get('/', async (req,res)=>{
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


router.get('/:id', async(res,req)=>{
    let collection = await db.collection("records");
    let query = {_id : new ObjectId (req.params.id)};
    let result = await collection.findOne(query);


    if(!result) res.send("Not Found").status(404);
    else res.send(result).status(200)
});

router.post("/", async(req,res)=>{
    let newDocument = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    }

    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument)
    res.send(result).status(204)
})



router.patch("/:id", async(req,res)=>{
    const query = {_id : new ObjectId(req.param.id)};
    const updates = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level

        }
    }

    let collection = await db.collection("records")
    let result = await collection.updateOne(query, updates)

    res.send(result).status(200);
})

router.delete("/:id", async(req,res)=>{
    const query = {_id : new ObjectId(req.params.id)}

    const collection = db.collection("records")
    let result = collection.deleteOne(query)

    res.send(result).status(200)
})

export default router;




