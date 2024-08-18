const { Client } = require("pg");
require("dotenv").config();

let client = new Client({
  connectionString: process.env.DATABASE_URL,
});

let date = new Date();
let dateString = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

let SQL = `
    CREATE TABLE IF NOT EXISTS messagetable(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author VARCHAR(255),
    message TEXT,
    date TEXT
    );

    INSERT INTO messagetable (author,message,date) VALUES ('S.Nikhilesh','I love programming but sometimes it becomes so frustrating that i feel like killing it','${dateString}');
`;

const main = async () => {
  console.log("...seeding");
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("completed");
};

main();
