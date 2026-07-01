import * as z from "zod";

const SIGNUP_SCHEMA = z
  .object({
    userName: z
      .string()
      .trim()
      .min(3, "the username must be atleast 3 character!")
      .max(30, "the username must not be more than 30 character!")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and _"
      ),

    email: z
      .string()
      .trim()
      .email("the Email is not valid"),

    password: z
      .string()
      .min(8, "Password must be more than 8 character")
      .max(128, "Password must not be more than 128 character")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
       "Password must contain at least one lowercase letter, one uppercase letter, and one number"
      ),

    confirmPassword: z
      .string()
      .min(1, "Please enter the password again"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The password and its confirmation do not match.",
    path: ["confirmPassword"],
  });

export default SIGNUP_SCHEMA;