import express from "express";
import authorRouter from "./authoresRoutes.js";
import booksRouter from "./booksRoutes.js";
import usersRouter from "./usersRoutes.js";

const routes = (app) => {
  app.use(express.json(), booksRouter, authorRouter, usersRouter);
};

export default routes;
