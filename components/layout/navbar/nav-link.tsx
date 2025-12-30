import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

const NavLink = ({
  label,
  href,
  className,
}: {
  label: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      key={label}
      className={cn(
        "dark:hover:text-foreground",
        className,
        buttonVariants({ variant: "ghost" }),
      )}
    >
      {label}
    </Link>
  );
};
export default NavLink;
