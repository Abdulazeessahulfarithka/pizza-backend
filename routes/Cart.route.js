import express from "express";
import { createcart, updateCart } from "../Controllers/Cart.controller.js";

const router = express.Router();

//routes
//create restruant
router.post("/createCart", createcart);
router.post("/update-cart", updateCart);

export default router;
