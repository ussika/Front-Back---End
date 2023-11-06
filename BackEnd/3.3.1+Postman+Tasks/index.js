const express = require("express");
const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
    res.send("<h1>Home Page </h1>");
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });



