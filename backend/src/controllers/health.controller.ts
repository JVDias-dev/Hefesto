import type { Request, Response } from "express";

import { prisma } from "../infrastructure/database/prisma";

export async function healthController(
  _request: Request,
  response: Response
) {
  try {
    await prisma.$queryRaw`SELECT 1`;

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