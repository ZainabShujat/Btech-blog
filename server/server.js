import express from "express";
import mongoose from "mongoose";

const app = express();

// --- connect to MongoDB Atlas ---
const MONGO_URI = "mongodb+srv://zainabshujatali_db_user:Vd7dNDwkaKKPT58q@cluster0.ny94mj4.mongodb.net/?appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- basic route ---
app.get("/", (req, res) => {
  res.send("Hello Zee, your server & database are alive 🚀");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
