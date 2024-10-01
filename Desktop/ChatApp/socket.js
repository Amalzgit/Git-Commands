import chat from "./controllers/chatController.js";

export const initializeSocket = (io) => {
    io.on("connection", (socket) => {
        chat(socket);
        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    });
};
