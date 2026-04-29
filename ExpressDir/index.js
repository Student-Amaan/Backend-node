const Express = require("express");
const app = Express();

const port = 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("this is my directory");
});
app.get("/apple", (req, res) => {
  res.send("Your contacted apple is");
});
app.get("/orange", (req, res) => {
  res.send("Your contacted orange is");
});

app.post("/", (req, res) => {
  res.send("this is your post request");
});

app.get("/", (req , res) => {
    res.send("this is my response")
})

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params
    res.send(`welcome to the page of ${username}`)
})

// app.get("*", (req, res) => {
//   res.send("this page doesn't exist");
// });

// res.send({
//     name: 'Aman',
//     location: 'southwaziristan',
//     subloc: 'GhawaKhawa',
//     port: 8080,
// })

// app.use((req, res) => {
//   console.log("request recived...");
// });
