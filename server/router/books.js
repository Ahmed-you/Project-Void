import express from "express";
import { getBooks, insertBook } from "../controllers/books.js";

const router = express.Router();

router.get("/", getBooks);

router.post("/", insertBook);

export default router;
