const { store, list } = require("../models/chat");

module.exports = (io, socket) => {
  socket.on("ping", (data) => {
    socket.emit("ping-response", data);
  });
  socket.on("join-room", (data) => {
    const { id, username, phone, password } = data;
    socket.join(id);
  });

  socket.on("send-message", (data) => {
    store(data)
      .then(async () => {
        const listChats = await list(data.sender, data.receiver);
        io.to(data.receiver).emit("send-message-response", listChats.rows);
      })
      .catch((err) => {
        console.log("error send message");
        console.log(err);
      });
  });

  socket.on("chat-history", async (data) => {
    try {
      console.log(data);
      const listChats = await list(data.sender, data.receiver);
      io.to(data.sender).emit("send-message-response", listChats.rows);
    } catch (err) {
      console.log("Error chat-history");
      console.log(err);
    }
  });
};
