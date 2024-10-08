const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const { IndexRouter } = require("./routes/IndexRoute");
const NewMessageRouter = require("./routes/NewMessageRoute");
const MessageRouter = require("./routes/MessageRoute");

app.use("/", IndexRouter);
app.use("/new", NewMessageRouter);
app.use("/message", MessageRouter);

let port = process.env.PORT || 3000;

app.listen(port);
