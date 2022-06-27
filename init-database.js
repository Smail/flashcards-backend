const dotenv = require("dotenv");
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

dotenv.config();

const db = new sqlite3.Database(process.env.DB_NAME);
console.log(db);

const createTablesSql = fs.readFileSync("./sql/create-tables.sql", { encoding: "utf-8" });
const exampleValuesSql = fs.readFileSync("./sql/create-tables.sql", { encoding: "utf-8" });

for (const table of createTablesSql.split(";")) {
    db.run(table);
}

db.run(exampleValuesSql);

db.close();
