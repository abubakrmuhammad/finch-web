import type postgres from "postgres";
import { env } from "~/env";

type SslMode = postgres.Options<Record<string, never>>["ssl"];

class DbUtils {
  createPgUrlFromEnv(sslMode: SslMode = "require") {
    return `postgresql://${env.PG_USER}:${env.PG_PASSWORD}@${env.PG_HOST}:${env.PG_PORT}/${env.PG_DATABASE}?sslmode=${sslMode}` as const;
  }
}

export default new DbUtils();
