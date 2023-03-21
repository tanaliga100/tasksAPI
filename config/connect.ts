import mongoose from "mongoose";

export const connectDB = async (url: any) => {
  try {
    return await mongoose.connect(url);
  } catch (error) {
    console.log("Failed to connect to database");
  }
};
