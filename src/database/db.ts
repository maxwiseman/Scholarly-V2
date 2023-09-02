import { Pool } from "@neondatabase/serverless";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/neon-serverless";

const pool = new Pool({
  connectionString:
    "postgres://maxwiseman:QyTj1kRK5GOP@ep-misty-smoke-544075-pooler.us-east-1.aws.neon.tech/main?pgbouncer=true&connect_timeout=10",
});
export const db = drizzle(pool, { schema });
