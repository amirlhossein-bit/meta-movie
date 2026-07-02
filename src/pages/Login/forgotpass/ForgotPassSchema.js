import { z } from "zod";

const FORGET_PASSWORD_SCHEMA = z
  .object({
    phone: z
      .string()
      .trim()
      .regex(/^09\d{9}$/, " the Number in not valid! ")
      .or(z.literal("")),

    email: z
      .string()
      .trim()
      .email("the Email is not valid!")
      .or(z.literal("")),
  })
  .refine(
    (data) => data.phone !== "" || data.email !== "",
    {
      message: "Please enter your phone number or email address.",
      path: ["phone"],
    }
  );

export default FORGET_PASSWORD_SCHEMA;