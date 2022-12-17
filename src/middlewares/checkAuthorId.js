import authors from "../models/Author.js";

export default function checkAuthorId(req, res, next) {
  const { author } = req.body.book;

  if (authors.findById(author)) {
    authors.findById(author, (_err, author) => {
      if (author) {
        next();
      } else {
        res.status(400).json({ message: "Author invalid" });
      }
    });
  }
}
