const express = require("express");

const app = express();

app.get("/", (request, response) => {
  console.log("Hi, there");
  response.send("Hello world");
});
app.listen(3789, () => {
  console.log("server started!");
});
