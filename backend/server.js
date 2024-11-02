import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
// dotenv configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT;
// 항상 외부랑 통신할떄는 async && await && tryCath

app.use(express.json()); //allow the server acppect the JSON file

app.use("/api/products", productRouter);

// Server Configuration
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Running in ${PORT}`);
});
