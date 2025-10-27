import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Zee, your server works 🚀");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
