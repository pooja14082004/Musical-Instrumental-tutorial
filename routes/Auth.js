const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const JWT_SECRET = "music_secret_key";

/* SIGN UP */
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const hashedPwd = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPwd
    });

    await user.save();
    res.json({ message: "User registered" });
});

/* SIGN IN */
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json("Invalid user");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json("Invalid password");

    const token = jwt.sign(
        { userId: user._id },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
});

module.exports = router;
