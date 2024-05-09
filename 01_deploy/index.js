require("dotenv").config();
const express = require("express");
const app = express();

// const port = ;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello Deepak</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("youtube.com");
});

app.listen( process.env.PORT, () => {
  console.log("server is listion on", process.env.PORT);
});
