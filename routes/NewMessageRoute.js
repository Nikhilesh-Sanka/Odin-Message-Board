const { Router } = require("express");
const router = Router();
const { messages } = require("./IndexRoute");

router.get("/", (req, res) => {
  res.render("new-message", {});
});
router.post("/", (req, res) => {
  let messageAuthor = req.body["author-name"];
  let messageText = req.body["message"];
  let messageDate = new Date();
  messages.push({
    author: messageAuthor,
    message: messageText,
    date: messageDate,
  });
  res.redirect("/");
});

module.exports = router;
