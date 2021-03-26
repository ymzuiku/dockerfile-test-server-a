import express from "express";
import { hello } from "./hello";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    server: "server-a",
  });
});

app.get("/a", (req, res) => {
  res.status(200).json({
    root: true,
    hello: "dog2",
  });
});

app.listen(3900, () => {
  console.log("listen in http://127.0.0.1:3900");
});
