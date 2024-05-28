import { z } from "zod";

export const signUpBodySchema = z.object({
  email: z
    .string({
      required_error: "Please provide an email.",
    })
    .email("Please provide a valid email"),
  password: z
    .string({
      required_error: "Please provide a password.",
    })
    .min(6, "Password must be at least 6 characters long"),
  role: z.enum(["user", "super_admin"]).default("user"),
  name: z.string().optional(),
});

export const loginBodySchema = z.object({
  email: z
    .string({
      required_error: "Please provide an email.",
    })
    .email("Please provide a valid email"),
  password: z.string({
    required_error: "Please provide a password.",
  }),
});
