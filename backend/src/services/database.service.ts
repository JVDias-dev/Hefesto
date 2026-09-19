import { prisma } from "../infrastructure/database/prisma";

export const databaseService = {
  async checkConnection(): Promise<void> {
    await prisma.$queryRaw`SELECT 1`;
  },
};