const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// bring in router
const characterRouter = require("../data/characterRouter.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<p>Running Server</p>");
});

module.exports = server;
