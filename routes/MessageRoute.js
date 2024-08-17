const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("message", {
    author: req.query["author"],
    text: req.query["message"],
    date: req.query["date"],
  });
});

module.exports = router;
