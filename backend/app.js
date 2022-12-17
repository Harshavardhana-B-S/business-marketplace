const express= require('express');
const app=express();

app.use(express.json())

//Route Imports
const contact=require("./routes/contactRoute");

app.use("/api/v1",contact);

module.exports=app;