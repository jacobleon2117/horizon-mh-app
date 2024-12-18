import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import { dirname } from "path";
import logger from "./config/logger.js";
import testRoute from "./routes/test.js";
import journalRoutes from "./routes/journals.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/test", testRoute);
app.use("/api/journals", journalRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

io.on("connection", (socket) => {
  logger.info("A user connected");

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    logger.info(`User joined room: ${roomId}`);
  });

  socket.on("leave-room", (roomId) => {
    socket.leave(roomId);
    logger.info(`User left room: ${roomId}`);
  });

  socket.on("disconnect", () => {
    logger.info("User disconnected");
  });
});

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
