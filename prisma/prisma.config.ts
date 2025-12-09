import { defineConfig } from '@prisma/internals';

export default defineConfig({
  schema: './schema.prisma',
  datasource: {
    db: {
      // Prisma 7 exige ESSA propriedade:
      provider: 'postgresql',
      url: process.env.DATABASE_URL,
    },
  },
});
