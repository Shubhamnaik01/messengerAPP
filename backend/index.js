import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = new express();
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log("Server Running on Port :", PORT);
});
