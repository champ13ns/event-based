import { Server } from "socket.io";
import { server } from  "./../index" 

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Socket.IO client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const broadcastUserEvent = (user: any) => {
  io.emit("user-added", user);
};

const broadCastUserDeletedEvent = (user : any) => {
    io.emit("user-deleted",user)
}

export { broadcastUserEvent ,broadCastUserDeletedEvent};
