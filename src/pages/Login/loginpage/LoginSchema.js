import * as z from "zod";

const LOGIN_SCHEMA = z.object({
  email: z.string().email("ایمیل وارد شده معتبر نیست"),

  password: z
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .max(128, "رمز عبور نمی‌تواند بیشتر از ۱۲۸ کاراکتر باشد")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"رمز عبور باید شامل حداقل یک حرف کوچک، یک حرف بزرگ و یک عدد باشد",),
});

export default LOGIN_SCHEMA;
