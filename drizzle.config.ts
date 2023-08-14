import type { Config } from "drizzle-kit";

export default {
  schema: "./src/database/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://maxwiseman:QyTj1kRK5GOP@ep-misty-smoke-544075.us-east-1.aws.neon.tech/main?sslmode=require",
  },
} satisfies Config;
