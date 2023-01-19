require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const socket = require("socket.io");
const router = require("./src/routes/index");
const socketController = require("./src/sockets/index");
const http = require("http");
const cors = require("cors");

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("New user connect");
  socketController(io, socket);
});

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log("Server running on", PORT);
});
