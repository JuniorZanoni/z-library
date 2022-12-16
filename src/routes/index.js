import express from "express";
import booksRouter from "./booksRoutes.js";

const routes = (app) => {
  app.use(express.json(), booksRouter);
};

export default routes;
