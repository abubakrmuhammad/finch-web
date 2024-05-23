import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signUpBodySchema } from "~/validators/auth.validators";
import authService from "~/services/auth.service";

const authRouterApp = new Hono();

authRouterApp.post("/signup", zValidator("json", signUpBodySchema), async c => {
  try {
    const body = c.req.valid("json");

    const newUser = await authService.signUp(body);

    return c.json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.log("🚀 ~ file: auth.routes.ts:23 ~ error:", error);
  }
});

export default authRouterApp;
