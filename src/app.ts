import { Hono } from "hono";

const app = new Hono();

app.get("api/v1", c => c.text("💸 FINCH API V1 💸"));

app.get("/", c => {
  return c.text("Hello Finch 👋🏻");
});

export default app;
