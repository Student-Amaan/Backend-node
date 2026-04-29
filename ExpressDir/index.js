const Express = require("express");
const app = Express();

const port = 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// res.send({
//     name: 'Aman',
//     location: 'southwaziristan',
//     subloc: 'GhawaKhawa',
//     port: 8080,
// })

// app.use((req, res) => {
//   console.log("request recived...");
// });
  app.get("/", (req, res) => {
    res.send("Your contacted path is");
  });
  app.get("/apple", (req, res) => {
    res.send("Your contacted apple is");
  });
  app.get("/orange", (req, res) => {
    res.send("Your contacted orange is");
  });

