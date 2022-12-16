import express from "express";

const app = express();

const books = [
  { id: 1, titulo: "aaa" },
  { id: 2, titulo: "bbb" },
];

app.get('/', (req, res) => {
    res.status(200).send("course of Node")
})

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

export default app;