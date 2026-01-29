import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import studentUploadRoute from "./routes/studentUpload.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// serve static uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// route for uploading files
app.use("/student", studentUploadRoute);

// list student uploaded files for frontend
app.get("/files/student", (req, res) => {
  const dir = path.join(__dirname, "uploads/student");

  if (!fs.existsSync(dir)) {
    return res.json([]);
  }

  const files = fs.readdirSync(dir).map(file => ({
    file,
    url: `/uploads/student/${file}`
  }));

  res.json(files);
});


app.listen(5000, () => console.log("Backend running on port 5000"));
