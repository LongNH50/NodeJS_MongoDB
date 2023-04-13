//1.Dependency

import express, { json } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

import mealsRouter from "./routers//mealsRouter.js";

//2.Init
const app = express();
dotenv.config();
app.use(json());

//3.App config
(async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/MealDatabase");
    console.log("Connected to mongodb://127.0.0.1:27017/MealDatabase");
  } catch (e) {
    console.log("Can not connect to DB");
  }
})();

//4.Middlewares
app.use(morgan("dev"));
//5.Routes
app.use("/meals", mealsRouter);

//6.Error handlers
app.all("*", (req, res, next) => {
  next(new Error("Route not found"));
});

app.use((error, req, res, next) => {
  res.status(404).json({ error: error.message });
});

//7.Bootstraps

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
