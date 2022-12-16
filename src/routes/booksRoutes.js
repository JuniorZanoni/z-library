import express from "express";
import BookController from "../controllers/booksController.js";

const booksRouter = express.Router();

booksRouter
  .get("/books", BookController.listBook)
  .post("/books", BookController.registerBook);

export default booksRouter;
