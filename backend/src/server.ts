import express from "express";
import cors from "cors";

import { env } from "./config/env";
import { errorMiddleware } from "./middlewares/error.middleware";
import apiRouter from "./routes";

const app = express();

app.use(
  cors({
    origin: env.frontendUrl,
  })
);

app.use(express.json());

app.use("/api", apiRouter);

app.use(errorMiddleware);

app.listen(env.port, () => {
  console.log(
    `TaskForge backend running on http://localhost:${env.port}`
  );
});