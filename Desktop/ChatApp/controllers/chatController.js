import { getBotResponse } from "../models/chatBotModel.js";

export default function chat(socket) {
    socket.on("sendMessage", (message) => {
        const response = getBotResponse(message);
        socket.emit("botResponse", response);
    });
}
