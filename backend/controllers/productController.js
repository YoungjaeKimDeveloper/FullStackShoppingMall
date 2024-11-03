import Product from "../models/productModel.js";
import mongoose from "mongoose";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send({ success: true, products: products });
  } catch (error) {
    res.status(404).send({ success: false, message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    res
      .status(404)
      .send({ success: false, message: "Please Fill the up All forms" });
  }

  // 기준에 적합한지 Schema 검사
  const newProduct = new Product(product);
  // Save the data
  try {
    // 만들어진 instance에 save로 저장해주면된다.
    await newProduct.save();
    res.status(201).send({
      success: true,
      message: "You Created new Product",
      data: newProduct,
    });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Failed to create new Product" });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  const findProduct = await Product.findById(id);
  // ID TYPE VALIDATION
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ success: false, message: "INVALID ID" });
  }
  if (findProduct == null) {
    return res.status(404).send({ success: false, message: "ITEM NOT FOUND!" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).send({ success: true, message: "ITEM IS DELETED" });
  } catch (error) {
    res.status(404).send({ success: false, message: error.message });
  }
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;
  const { name, price, image } = newProduct;
  if (!name || !price || !image) {
    return res
      .status(404)
      .send({ success: false, message: "PLEASE FILL UP THE ALL FORMS" });
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .send({ success: false, message: "Can't find the DATA" });
  }
  try {
    await Product.findByIdAndUpdate({ _id: id }, newProduct, { new: true });
    res.status(201).send({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
