const express = require("express")
const app = express()
const path = require("path")

const port = 3001

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get('/', (req , res) => {
    res.render("home")
})

app.get("/ig/:username", (req,res) => {
    let instaData = require("./data.json")
    // const followers = ["Aman", "dansih", "waxir", "tasela"]
    let {username} = req.params;
    let data = instaData[username]
    console.log(data) 
    if(data){

        res.render("instagram.ejs", {data})
    }else{
        res.render("error.ejs")
    }
})
app.get('/hello', (req , res) => {
    res.send("home hello")
})
app.get('/rolldic', (req , res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldic.ejs", { diceValue})
})

app.listen(port, () => {
    console.log(`Your port is running from ${port}`)
})