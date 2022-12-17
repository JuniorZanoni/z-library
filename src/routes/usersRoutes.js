import express from "express";
import UserController from "../controllers/usersController.js";

const usersRouter = express.Router();

usersRouter.get("/login", UserController.login);

export default usersRouter;
