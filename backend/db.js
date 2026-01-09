const { Pool } = require("pg");

const pool = new Pool({
    user: "postgreSQL",
    host: "localhost",
    database: "music_auth_db",
    password: "YOUR_DB_PASSWORD",
    port: 5432,
});

module.exports = pool;
