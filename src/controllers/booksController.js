import books from "../models/Book.js";

class BookController {
  static listBook = (_req, res) => {
    books.find((_err, books) => {
      res.status(200).json(books);
    });
  };

  static registerBook = (req, res) => {
    const book = new books(req.body);
    book.save((err) => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(201).json(book.toJSON());
      }
    });
  };
}

export default BookController;
