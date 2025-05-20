import { Pool } from "pg"; // ✅ use named import
import dotenv from "dotenv";

dotenv.config();

const dbURL =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;

if (!dbURL) throw new Error("No Database URL!!!");

const options = {
  connectionString: dbURL,
  ssl: process.env.NODE_ENV === "production", // optional toggle
};

const pool = new Pool(options);

export default pool;
