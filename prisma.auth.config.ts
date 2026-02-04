import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.auth.prisma",
  migrations: {
    seed: "tsx prisma/seed-auth.ts",
  },
  datasource: {
    url: env("DATABASE_URL_AUTH"),
  },
});
