import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect(process.env.URL_MONGO);

export function testConnection() {
  try {
    db.once("open", () => console.log("Database connection successful"));
  } catch (error) {
    console.log("Database connection failed");
  }
}

const db = mongoose.connection;

export default db;
