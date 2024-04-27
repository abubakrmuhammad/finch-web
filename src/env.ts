import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    PORT: z.coerce.number(),
    PG_HOST: z.string(),
    PG_DATABASE: z.string(),
    PG_USER: z.string(),
    PG_PASSWORD: z.string(),
    PG_ENDPOINT_ID: z.string(),
    PG_PORT: z.coerce.number(),
  },
  runtimeEnv: process.env,
});
