const express=require('express');
const app = express(); 
const mongoose = require("mongoose"); 
const port=8000;

mongoose.connect("mongodb://localhost:27017/userdb",{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log("connection successful"))
.catch((err)=>console.log(err));

const user=require("./models/users");

app.get("/",(req,res)=>{
        res.send("welcome to the home page");
})

app.get("/users/api",(req,res)=>{
    user.find({}).then( (data)=>{
        res.send(data);
        console.log(data);
    })
})


app.get("*",(req,res)=>{
    res.send("error 404 found",404);
})

app.listen(port,(req,res)=>{
    console.log(`Listening at the port ${port}`);
})