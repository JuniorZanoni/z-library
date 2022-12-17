import express from "express";
import checkToken from "../middlewares/checkToken.js";
import AuthorController from "../controllers/authorsController.js";

const authorsRouter = express.Router();

authorsRouter
  .get("/authors", AuthorController.getAllAuthors)
  .get("/authors/:id", AuthorController.getAuthorById)
  .post("/authors", checkToken, AuthorController.registerAuthor)
  .put("/authors/:id", checkToken, AuthorController.updateAuthor)
  .delete("/authors/:id", checkToken, AuthorController.deleteAuthor);

export default authorsRouter;
