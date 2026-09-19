import type { Request, Response } from "express";

import { databaseService } from "../services/database.service";

export async function healthController(
  _request: Request,
  response: Response
) {
  try {
    await databaseService.checkConnection();

    response.json({
      status: "ok",
      service: "taskforge-backend",
      database: "connected",
    });
  } catch (error) {
    console.error("Database health check failed:", error);

    response.status(503).json({
      status: "error",
      service: "taskforge-backend",
      database: "disconnected",
    });
  }
}