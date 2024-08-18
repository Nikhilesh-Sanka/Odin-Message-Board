const { Router } = require("express");
const router = Router();
const queries = require("../db/queries");

router.get("/", (req, res) => {
  res.render("new-message", {});
});
router.post("/", async (req, res) => {
  let reqBody = req.body;
  let date = new Date();
  let dateString = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  await queries.insertMessage({
    author: reqBody["author-name"],
    message: reqBody.message,
    date: dateString,
  });
  res.redirect("/");
});

module.exports = router;
