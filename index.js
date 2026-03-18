const express = require("express")
const path = require("path")

const app = express()

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/features',(req,res)=>{
    res.render("features")
})

app.get('/why',(req,res)=>{
    res.render("why")
})

app.get('/technologies',(req,res)=>{
    res.render("technologies")
})

app.get('/getting-started',(req,res)=>{
    res.render("getting-started")
})

app.get('/contact',(req,res)=>{
    res.render("contact")
})

app.get('/poster',(req,res)=>{
    res.sendFile(path.join(__dirname, "poster.pdf"))
})

app.listen(3000,()=>{
    console.log("App running on port 3000")
})
