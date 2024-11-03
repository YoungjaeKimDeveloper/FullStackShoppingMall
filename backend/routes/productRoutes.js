import mongoose from "mongoose";
import express from "express";
import Product from "../models/productModel.js";
import {
  getProducts,
  createProduct,
  deleteItem,
  updateItem,
} from "../controllers/productController.js";
const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export default router;
// Design Pattern
// 항상 외부에서 불러오는건 async && await && async 3 형제 넣어주기
