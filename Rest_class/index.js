const express = require("express")

const app = express()

const port = 8080;
const path = require("path")

app.use(express.urlencoded({extended: true}))

app.set("view engine", 'ejs')
app.set("views",path.join(__dirname,'views'))
app.set(express.static,(path.join(__dirname,'public')))


let posts = [
    {
    username: "aman",
    content: "I love coding",
    },
    {
    username: "danish",
    content: "I love to make website",
    },
    {
    username: "waxir",
    content: "I love to lanched project",
    }
]
app.get("/posts", (req , res) => {
    res.send("Server working well!");
})

app.listen(port, () => {
    console.log(`port is listening for ${port}...`)
})