import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import { dirname } from "path";
import logger from "./config/logger.js";
import testRoute from "./routes/test.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Middleware (consolidate cors configuration)
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/test", testRoute); // Use the imported route

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// WebSocket setup
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

// Error handling
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
