import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = new express();
const PORT = process.env.PORT || 2000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server Running on Port :", PORT);
  });
});
