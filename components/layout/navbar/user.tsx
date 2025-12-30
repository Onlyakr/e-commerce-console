"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Link from "next/link";

const UserAuth = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Link
        href="/sign-in"
        className={cn(buttonVariants({ variant: "outline" }), "max-lg:w-full")}
      >
        Sign In
      </Link>
      <Link href="/sign-up" className={cn(buttonVariants(), "max-lg:w-full")}>
        Sign Up
      </Link>
    </div>
  );
};

export default UserAuth;
