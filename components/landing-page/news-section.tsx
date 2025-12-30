"use client";

import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError } from "../ui/field";
import { newsletterSchema } from "@/schemas/news";

const NewsletterSection = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (data: z.infer<typeof newsletterSchema>) => {
    console.log(data);
  };

  return (
    <section className="bg-card">
      <div className="container py-12 px-4 mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center justify-center bg-primary/10 rounded-full p-2">
          <Mail className="size-6 text-primary" />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
          <p className="text-muted-foreground">
            Get the latest news and updates from our store.
          </p>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-start w-full md:flex-row "
          >
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button
              type="submit"
              variant="default"
              className="w-full cursor-pointer md:w-auto"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-muted-foreground text-sm">
            We will send you an email with the latest news and updates.
          </p>
        </div>
      </div>
    </section>
  );
};
export default NewsletterSection;
