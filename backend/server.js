const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth");
const app = express();
app.use(cors());
app.use(express.json());






app.use("/api", authRoutes);

/* ✅ PROTECTED STUDENT ROUTE */
app.get("/student", authMiddleware, (req, res) => {
    res.json({
        message: "Welcome to Student Dashboard ",
        userId: req.user.id
    });
});

mongoose.connect(
    "mongodb+srv://testuser:test123@cluster0.apwpojr.mongodb.net/?appName=Cluster0"

).then(() => console.log("MongoDB Connected"));

app.use("/api", authRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
