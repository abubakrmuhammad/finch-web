import type { Config } from "drizzle-kit";
import dbUtils from "~/utils/db.utils";

export default {
  schema: "./src/db/schema",
  driver: "pg",
  dbCredentials: {
    connectionString: dbUtils.createPgUrlFromEnv(),
  },
} satisfies Config;
