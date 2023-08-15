import type { Config } from "drizzle-kit";
import { URL } from "./dbconfig";

export default {
  schema: "./src/database/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: URL,
  },
} satisfies Config;
