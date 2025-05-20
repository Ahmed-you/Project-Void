import {
  getBooks as getBooksQuery,
  insertBook as insertBooksQuery,
} from "../database/queries/books.js";

export const getBooks = (req, res) => {
  getBooksQuery()
    .then((result) => res.json(result.rows))
    .catch((err) => {
      console.error("DB error:", err);
      res.status(500).json({ error: "Internal server error" });
    });
};
 
export const insertBook = (req, res) => {
//   console.log(req.body[0]);

  insertBooksQuery(req.body[0])
    .then((result) => res.json(result))
    .catch((err) => {
      console.error("DB error:", err);
      res.status(500).json({ error: "Internal server error" });
    });
};
