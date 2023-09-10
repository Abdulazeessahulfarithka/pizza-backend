import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
import bodyParser from "body-parser";
import resturantRouter from "./routes/Resturant.routes.js";
import FoodRouter from "./routes/Food.route.js";
dotenv.config();

//// express
const app = express();
const PORT = process.env.PORT || 6000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// database connection
connectDB();

// router
app.use("/api/user", resturantRouter);
app.use("/api/food",FoodRouter)
app.listen(PORT, "localhost", () => {
  console.log("app started");
});
