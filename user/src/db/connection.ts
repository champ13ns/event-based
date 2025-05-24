import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = process.env.DB_URL as string;

export async function connectDB() {
  try {
    let connection = await mongoose.connect(DB_URL);
    console.log("DB Connected succesfully", connection.connection.host);
  } catch (error: unknown) {
    console.error("Error while connecting with DB", error);
  }
}
