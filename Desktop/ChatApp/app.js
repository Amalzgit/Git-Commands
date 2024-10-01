import express from "express";
import http from "http";
import serverConfig from "./config/serverConfig.js";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
import { initializeSocket } from "./socket.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

initializeSocket(io);

const PORT = serverConfig.port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
