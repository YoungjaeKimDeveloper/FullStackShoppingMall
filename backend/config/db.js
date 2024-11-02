import mongoose from "mongoose";
// 외부 작업수행할떄는 항상 async로 연결하기
// Async await + tryCatch,
export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB IS CONNECTED");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
