CREATE TABLE IF NOT EXISTS users (
    username TEXT UNIQUE,
    firstName TEXT,
    lastName TEXT,
    creation_date DATETIME DEFAULT current_timestamp
);

CREATE TABLE IF NOT EXISTS flashcards (
    username TEXT,
    creation_date DATETIME DEFAULT current_timestamp,
    FOREIGN KEY(username) REFERENCES users(username)
);
