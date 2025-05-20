import express from "express";
import { addNote, changNoteNewStatus, getNotes, removeNote } from "../controllers/notes.js";

const router = express.Router();

router.get("/", getNotes);

router.post("/", addNote);

router.delete("/:id", removeNote);
router.patch("/status/:id",changNoteNewStatus);
export default router;
