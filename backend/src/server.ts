import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { errorMiddleware } from "./middlewares/error.middleware";
import apiRouter from "./routes";
import { prisma } from "./infrastructure/database/prisma";

const app = express();

app.use(
  cors({
    origin: env.frontendUrl,
  })
);

app.use(express.json());

app.use("/api", apiRouter);

app.use(errorMiddleware);

async function startServer() {
  try {
    await prisma.$connect();

    console.log("PostgreSQL connected.");

    app.listen(env.port, () => {
      console.log(
        `TaskForge backend running on http://localhost:${env.port}`
      );
    });
  } catch (error) {
    console.error("Failed to connect to PostgreSQL:", error);
    process.exit(1);
  }
}

startServer();