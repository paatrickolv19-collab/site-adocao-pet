import { defineConfig } from "@prisma/config";

export default defineConfig({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // se estiver usando migrate/dev:
  schema: "./schema.prisma",
});
