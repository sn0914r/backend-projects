import { z } from "zod";

export const UserSchema = z.object(
  {
    name: z
      .string({
        message: "Name must be string",
      })
      .optional(),
    email: z.email("Please provide a valid email address"),
    password: z
      .string({
        message: "Password must be string",
      })
      .min(6, "Password must be atleast 6 characters long"),
  },
  {
    message: "Request body must be a valid JSON object",
  },
);

export type UserSchemaType = z.infer<typeof UserSchema>;
