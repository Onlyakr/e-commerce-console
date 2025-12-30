import z from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(1, "Full name is required"),
    email: z.email("Must be a valid email").min(8, "Email is required"),
    password: z.string().min(8, "Password is required"),
    confirmPassword: z.string().min(8, "Confirm password is required"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.email("Must be a valid email").min(8, "Email is required"),
  password: z.string().min(8, "Password is required"),
});
