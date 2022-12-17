import books from "../models/Book.js";

class BookController {
  static getAllBooks = (_req, res) => {
    books
      .find()
      .populate("author")
      .exec((_err, books) => {
        res.status(200).json(books);
      });
  };

  static getBookById = (req, res) => {
    const id = req.params.id;

    books
      .findById(id)
      .populate("author", "name")
      .exec((err, book) => {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
          res.status(200).json(book);
        }
      });
  };

  static getBooksByBookPublisher = (req, res) => {
    const bookPublisher = req.query.bookPublisher;
 
    books.find({ bookPublisher: bookPublisher }, {}, (err, books) => {
      res.status(200).json(books);
    });
  };

  static registerBook = (req, res) => {
    const book = new books(req.body.book);

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
    const book = req.body.book;

    books.findByIdAndUpdate(id, { $set: book }, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(201).json({ message: "Successfully updated book" });
      }
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json({ message: "Successfully deleted book" });
      }
    });
  };
}

export default BookController;
