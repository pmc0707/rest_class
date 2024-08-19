 
const express = require('express');
const app = express();
const port = 8080;

const path = require('path');

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));



let posts = [
    {
        username : "apnacollege",
        content : "hard work improve"
    },
    {
        username: "physics wallah",
        content: "12th foundation"
    }
];
app.get("/posts",(req,res)=>
{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})