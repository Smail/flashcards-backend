const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const sqlite3 = require("sqlite3").verbose();

dotenv.config();

console.log("../" + process.env.DB_NAME);
const db = new sqlite3.Database("../" + process.env.DB_NAME);
console.log(db);

/* GET users listing. */
router.get("/", function (req, res, next) {
  db.serialize(() => {
    const users = [];

    db.each("SELECT rowid AS id, username, firstname, lastname FROM users", function (err, row) {
      console.log(row);
      if (err != null) {
        users.push({
          id: row.id,
          username: row.username,
          firstname: row.firstname,
          lastname: row.lastname,
        });
      } else {
        console.error(err);
      }
    });
  });

  res.send(JSON.stringify(users));
});

module.exports = router;
