import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/userRoutes.js";
import aiRoutes from "./Routes/aiRoutes.js";
dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT;

app.use(express.json({ limit: "16kb" }));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use("/", userRoutes);
app.use("/api/getDet", aiRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Failed to connect to Database", err));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
