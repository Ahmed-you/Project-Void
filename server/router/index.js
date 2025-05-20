import express from "express";
import booksRouter from "./books.js";
import notesRouter from "./notes.js";
import ordersRouter from "./orders.js";
import adminRouter from "./admin.js";

const router = express.Router();
router.use("/api/books", booksRouter);
router.use("/api/notes", notesRouter);
router.use("/api/orders", ordersRouter);
router.use("/api/admin", adminRouter);

export default router;
