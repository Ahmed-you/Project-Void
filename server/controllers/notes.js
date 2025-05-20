import {
  getNotes as getNotesQuery,
  addNote as addNotesQuery,
  deleteNote,
  updateNoteStatus,
} from "../database/queries/notes.js";

export const getNotes = (req, res) => {
  getNotesQuery()
    .then((result) => res.json(result.rows))
    .catch((err) => {
      console.error("DB error:", err);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    });
};

export const addNote = (req, res) => {
  addNotesQuery(req.body[0])
    .then((result) => res.json(result))
    .catch((err) => {
      console.error("DB error:", err);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    });
};

export const removeNote = (req, res) => {
  const { id } = req.params;

  deleteNote(id)
    .then(() => res.status(200).json({ message: "Note deleted" }))
    .catch((err) => {
      console.error("Delete error:", err);
      res.status(500).json({ error: "Failed to delete note" });
    });
};



export const changNoteNewStatus = (req, res) => {
  const { id } = req.params;
  let { newStatus } = req.body;

  if (isNaN(Number(id))) {
    return res.status(400).json({ error: `ID '${id}' must be an integer.` });
  }
  if (typeof newStatus !== "boolean") {
    return res.status(400).json({
      error: `newStatus '${typeof newStatus}' must be a Boolean.`,
    });
  }
  updateNoteStatus(id, newStatus)
    .then(() => res.status(200).json({ message: "Note status updated" }))

    .catch((err) => {
      console.error("Update error:", err);
      res.status(500).json({ error: "Failed to update NoteStatus" });
    });
};