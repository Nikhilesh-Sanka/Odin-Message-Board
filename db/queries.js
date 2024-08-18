const pool = require("./pool.js");

async function getMessages() {
  let { rows } = await pool.query(`SELECT * FROM messagetable`);
  return rows;
}

async function insertMessage(message) {
  await pool.query(
    "INSERT INTO messagetable (author,message,date) VALUES ($1,$2,$3)",
    [message.author, message.message, message.date]
  );
}

module.exports = {
  getMessages,
  insertMessage,
};
