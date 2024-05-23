import { Hono } from "hono";
import authRouterApp from "./routes/auth.routes";

const app = new Hono();

app.get("api/v1", c => c.text("💸 FINCH API V1 💸"));

app.get("/", c => {
  return c.text("Hello Finch 👋🏻");
});

app.route("api/v1/auth", authRouterApp);

export default app;
