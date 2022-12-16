import express from "express";
import { testConnection } from "./config/dbConnect.js";
import books from "./models/Book.js";

testConnection();

const app = express();

app.use(express.json());

app.get("/books", (_req, res) => {
  books.find((_err, books) => {
    res.status(200).json(books);
  });
});


export default app;
