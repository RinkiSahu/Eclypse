import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import data from "./data/data.json"  assert { type: "json" };
;

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Get proper directory name for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON requests

// Serve static images from frontend directory
app.use("/images", express.static(path.join(__dirname, "../eclipse/src/assets/images")));

// Define API Endpoints
app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});