import authors from "../models/Author.js";

class AuthorController {
  static getAllAuthors = (_req, res) => {
    authors.find((_err, authors) => {
      res.status(200).json(authors);
    });
  };

  static getAuthorById = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, author) => {
      if (err) {
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json(author);
      }
    });
  };

  static registerAuthor = (req, res) => {
    const author = new authors(req.body.author);

    author.save((err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(201).json(author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;
    const author = req.body.author;

    authors.findByIdAndUpdate(id, { $set: author }, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(201).json({ message: "Successfully updated author" });
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json({ message: "Successfully deleted author" });
      }
    });
  };
}

export default AuthorController;
