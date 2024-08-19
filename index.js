 
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
        id:"1a",
        username : "apnacollege",
        content : "hard work improve"
    },
    {
        id:"2a",
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
app.post("/posts", (req, res)=>{
    let { username, content} =req.body;
    posts.push( { username, content});
    // res.send("req has been sent");
    res.redirect("/posts");
})
app.get("/posts/:id", (req, res)=>{
   let {id} = req.params;
   let post = posts.find((p) =>id ===p.id);
   res.render("show.ejs", {post})
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})