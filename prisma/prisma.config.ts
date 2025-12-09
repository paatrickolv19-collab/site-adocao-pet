import { defineConfig } from '@prisma/internals';

export default defineConfig({
  schema: './schema.prisma',
  datasource: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
