import pool from "../config/connection.js";

export const getNotes = () => {
  return pool.query("SELECT * FROM notes;");
};
export const addNote = (noteDetailsObject) => {
  const { email, message } = noteDetailsObject;
  if (!noteDetailsObject) return;

  const query = `
      INSERT INTO notes (email, message) VALUES
        ($1, $2)
      RETURNING *;
    `;

  const values = [email, message];

  return pool.query(query, values);
};

export const deleteNote = (noteId) => {
  const query = `DELETE FROM notes WHERE note_id = $1;`;
  return pool.query(query, [noteId]);
};

export const updateNoteStatus = (note_id, newStatus) => {
  const query = `UPDATE notes
SET is_new = $1
WHERE note_id = $2;`;
  return pool.query(query, [newStatus, note_id]);
};

export default { getNotes, addNote, deleteNote, updateNoteStatus };
