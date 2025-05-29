import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// Adjust file path for Netlify functions
const dataPath = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

// Netlify functions automatically wrap your Express app,
// so we must prefix API routes correctly.
const router = express.Router();

router.get("/data", (req, res) => {
  console.log("📡 Request received: GET /api/data");
  res.json(data);
});

// ✅ New route for fetching `productData`
router.get("/data/productData", (req, res) => {
    console.log("📡 Request received: GET /api/data/productData");
    res.json(data.productData);  // Accessing nested `productData`
  });


app.use("/.netlify/functions/api", router); // Correct function path for Netlify

export const handler = serverless(app);
console.log("🚀 API is running on Netlify!");