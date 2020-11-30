const express=require('express');
const app = express(); 
const mongoose = require("mongoose"); 
const port=8000;

mongoose.connect("mongodb://localhost:27017/userdb",{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log("connection successful"))
.catch((err)=>console.log(err));

const user=require("./models/users");

app.get("/",(req,res)=>{
    user.find({}).then( (data)=>{
        console.log(data);
    })
    res.send("welcome");
})
app.listen(port,(req,res)=>{
    console.log(`Listening at the port ${port}`);
})