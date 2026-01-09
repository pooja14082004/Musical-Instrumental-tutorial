const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json("Access denied");

    try {
        jwt.verify(token, "music_secret_key");
        next();
    } catch {
        res.status(401).json("Invalid token");
    }
};
