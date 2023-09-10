import express from "express";
import {
  createresurant,
  updateResturant,
  restruantControlller,
  singleResturantController,
  deleteResturantCOntroller,
} from "../Controllers/Resturant.controller.js";

const router = express.Router();

//routes
//create restruant
router.post("/create-resturant",createresurant);
export default router;