const express = require("express")
const app = express()
const path = require("path")

 const port = 8080

 app.use(express.static("public"))

 app.set("view engine", "ejs")
 app.set("views", path.join(__dirname,"/views"))
 
 app.get("/",(req,res)=>{
    res.render("home.ejs")
 })

 app.get("/ig/:udername",(req,res)=>{
   const followers = ["adam", "nam", "milky"]
   let {username} = req.params
   res.render("ig.ejs",{username,followers})
 })



 app.get("/hello",(req,res)=>{
   res.send("hello")
 })

 app.get("/rolldice", (req,res)=>{
    res.render(rolldice.ejs)
 })

 app.listen(port,() =>{
    console.log(`listening on port ${port}`)
 })





