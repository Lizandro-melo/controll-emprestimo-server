import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.logic.prisma",
  migrations: {
    seed: "tsx prisma/seed-logic.ts",
  },
  datasource: {
    url: env("DATABASE_URL_LOGIC"),
  },
});
