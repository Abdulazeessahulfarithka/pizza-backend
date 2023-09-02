import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
dotenv.config();

//// express
const app = express();
const PORT = process.env.PORT || 6000;

// database connection
connectDB();
