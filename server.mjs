import express from "express";    
import cors from "cors";       //cross-origin enable
import "./loadEnvironment.mjs";  
import  record from "./routes/record.mjs";  

const PORT = process.env.PORT || 2121; //process.env.port will be required from loadEnvironment.mjs, that why we have imported that file at the top.
const app = express() // express() is the top function of the express app. this express() fuction is called to make to create a new object/instance of our express app.

app.use(cors());
app.use(express.json());


app.use('/record', record)



app.listen(PORT,()=> (console.log(`server running on ${PORT}`)))