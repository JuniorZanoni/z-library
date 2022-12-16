import express from "express";
import { testConnection } from "./config/dbConnect.js";
import routes from "./routes/index.js";

testConnection();

const app = express();

routes(app)

export default app;
