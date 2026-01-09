const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const SECRET = "music_secret";

/* SIGNUP */
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
        name,
        email,
        password: hashed
    });

    res.json({ message: "User registered" });
});

/* LOGIN */
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json("User not found");

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json("Wrong password");

    const token = jwt.sign(
        { id: user._id },
        SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
});

module.exports = router;
