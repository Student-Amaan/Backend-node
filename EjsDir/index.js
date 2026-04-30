const express = require("express")
const app = express()

const port = 3001

app.set("view engine", "ejs")

app.get('/', (req , res) => {
    res.render("home")
})
app.get('/hello', (req , res) => {
    res.send("home hello")
})

app.listen(port, () => {
    console.log(`Your port is running from ${port}`)
})