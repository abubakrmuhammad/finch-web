import type { Config } from "drizzle-kit";
import dbUtils from "~/utils/db.utils";

export default {
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUtils.createPgUrlFromEnv(),
  },
  verbose: true,
  strict: true,
} satisfies Config;
