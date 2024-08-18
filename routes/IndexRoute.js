const { Router } = require("express");
const router = Router();
const queries = require("../db/queries.js");

router.route("/").get(async (req, res) => {
  let messages = await queries.getMessages();
  res.render("index", { messages, title: "Mini Message Board" });
});

module.exports = { IndexRouter: router };
