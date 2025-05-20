import pool from "../config/connection.js";

export const getBooks = () => {
  return pool.query("SELECT * FROM books;");
};

export const insertBook = (booksDetailsObject) => {
  const {
    title,
    cover_url,
    images,
    category,
    price_usd,
    price_egp,
    language,
    pages,
    isbn,
    size_cm,
    size_inch,
  } = booksDetailsObject;

  const query = `
      INSERT INTO books
        (title, cover_url, images, category, price_usd, price_egp, language, pages, isbn, size_cm, size_inch)
      VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *;
    `;

  const values = [
    title,
    cover_url,
    images,
    category,
    price_usd,
    price_egp,
    language,
    pages,
    isbn,
    size_cm,
    size_inch,
  ];

  return pool.query(query, values);
};

export default { insertBook, getBooks };
