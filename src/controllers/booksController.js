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
        res.status(500).json({ message: err.message });
      } else {
        res.status(201).json(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;
    const book = req.body;

    books.findByIdAndUpdate(id, { $set: book }, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(201).json({ message: "Successfully updated book" });
      }
    });
  };
}

export default BookController;
