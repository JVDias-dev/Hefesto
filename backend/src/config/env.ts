import "dotenv/config";

export const env = {
  port: Number(process.env.PORT) || 3000,

  frontendUrl:
    process.env.FRONTEND_URL || "http://localhost:5173",

  databaseUrl: process.env.DATABASE_URL || "",

  aiApiKey: process.env.AI_API_KEY || "",
};