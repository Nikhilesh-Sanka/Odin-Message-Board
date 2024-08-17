const { Router } = require("express");
const router = Router();

const messages = [
  {
    author: "S.Nikhilesh",
    message:
      "I like programming but sometimes it gets so clumsy and frustrating that makes me feel like killing it.",
    date: new Date(),
  },
];

router.route("/").get((req, res) => {
  res.render("index", { messages, title: "Mini Message Board" });
});

module.exports = { IndexRouter: router, messages: messages };
