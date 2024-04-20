import { Socket, Server } from "socket.io";
import http from "http";
import { app } from "./app.js";
import { config } from "dotenv";
import { connect } from "./utils/db.js";

config({
  path: "./config.env",
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});



io.on("connection", (socket) => {
  console.log("USER CONNECTED:", socket.id);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
