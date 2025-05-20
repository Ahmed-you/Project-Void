import pool from "../config/connection.js";

export const findAdminByName = (name) => {
  return pool.query("SELECT * FROM admins WHERE name = $1", [name]);
};

export default {findAdminByName };
