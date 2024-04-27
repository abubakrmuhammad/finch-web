import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/env";
import * as schema from "~/db/schema";

const { PG_HOST, PG_DATABASE, PG_USER, PG_PASSWORD, PG_PORT, PG_ENDPOINT_ID } =
  env;

const sql = postgres({
  host: PG_HOST,
  database: PG_DATABASE,
  user: PG_USER,
  password: PG_PASSWORD,
  port: PG_PORT,
  ssl: "require",
  connection: {
    options: `project=${PG_ENDPOINT_ID}`,
  },
});

const db = drizzle(sql, { schema });

export default db;
