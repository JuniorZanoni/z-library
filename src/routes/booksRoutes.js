import express from "express";
import BookController from "../controllers/booksController.js";
import checkAuthorId from "../middlewares/checkAuthorId.js";
import checkToken from "../middlewares/checkToken.js";

const booksRouter = express.Router();

booksRouter
  .get("/books/search",  BookController.getBooksByBookPublisher)
  .get("/books/:id", BookController.getBookById)
  .get("/books", BookController.getAllBooks)
  .post("/books", checkToken, checkAuthorId, BookController.registerBook)
  .put("/books/:id", checkToken,BookController.updateBook)
  .delete("/books/:id", checkToken,BookController.deleteBook);

export default booksRouter;
