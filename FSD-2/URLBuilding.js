const express = require("express")
const app = express();

 app.get("/",(req,res)=>{
    res.send("Simple route")
 });


 app.get("/user/:name",(req,res)=>{
    res.send(`user : ${req.params.name}`)
 });


app.get("/about",(req,res)=>{
    res.send(`item : ${req.query.item} : price : ${req.query.price}`);
})
app.get("/link",(req,res)=>{
    res.send(
        `<a href="/user/tarun">User name</a><br>
         <a href="/about?item=Black current Icecream&price=70">item </a>
        `
    );
})

app.listen(3050,()=>{
    console.log("http://localhost:3050")
})


// npm create vite@latest 5a
// y
// react
// js
// no
// yes
// npm i
// npm run dev

