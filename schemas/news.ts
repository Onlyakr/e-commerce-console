import z from "zod";

export const newsletterSchema = z.object({
  email: z.email("Must be a valid email").min(8, "Email is required"),
});
