// prisma/prisma.config.ts
import { defineConfig } from '@prisma/internals';

export default defineConfig({
  schema: './schema.prisma',
  // Substitua pelo ambiente que você já usava (por padrão, a variável de ambiente DATABASE_URL)
  datasource: {
    db: {
      url: process.env.DATABASE_URL!, // o "!" só confirma que você sabe que a variável existe
    },
  },
});
