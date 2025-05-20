import { findAdminByName } from "../database/queries/admin.js";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

// export const getAdmin = (req, res) => {
//   getAdminQuery()
//     .then((result) => res.json(result.rows))
//     .catch((err) => {
//       console.error("DB error:", err);
//       res
//         .status(500)
//         .json({ error: "Internal Server Error", details: err.message });
//     });
// };

// export const addAdmin = (req, res) => {
//   addAdminQuery(req.body[0])
//     .then((result) => res.json(result))
//     .catch((err) => {
//       console.error("DB error:", err);
//       res
//         .status(500)
//         .json({ error: "Internal Server Error", details: err.message });
//     });
// };

export const loginAdmin = (req, res) => {
  const { name, password } = req.body;

  findAdminByName(name)
    .then((result) => {
      const admin = result.rows[0];
      if (!admin || admin.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      res.json({ msg: "login successful" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    });
};
