import express from "express";
import {
  createfood,
  updateFood,
  foodController,
} from "../Controllers/Fooditems.controller.js";

const router = express.Router();

//routes
//create restruant
router.post("/create-food", createfood);
router.get("/getAllFood/:resturantId",foodController)
export default router;

