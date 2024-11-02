import mongoose from "mongoose";
import express from "express";
import Product from "../models/productModel.js";
import {
  getProducts,
  createProduct,
  deleteItem,
} from "../controllers/productController.js";
const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

// delete Product
router.delete("/:id", deleteItem);

export default router;
// 항상 외부에서 불러오는건 async && await && async 3 형제 넣어주기
