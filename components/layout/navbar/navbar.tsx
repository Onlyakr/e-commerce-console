"use client";

import { Menu, ShoppingCart } from "lucide-react";
import { buttonVariants } from "../../ui/button";
import { Input } from "../../ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Logo from "@/components/common/logo";
import UserAuth from "./user";
import NavLink from "./nav-link";
import SignOutButton from "@/components/common/sign-out-button";

const navItems = [
  { label: "Shop", href: "/shop" },
  {
    label: "Consoles",
    href: "/shop?category=consoles",
  },
  {
    label: "Games",
    href: "/shop?category=games",
  },
  {
    label: "Accessories",
    href: "/shop?category=accessories",
  },
];

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const isAdmin = session?.user?.role === "admin";

  return (
    <header className="bg-background/70 sticky top-0 z-50 backdrop-blur-sm outline-1 outline-border">
      <nav className="container mx-auto p-4 flex items-center justify-between gap-8">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-between gap-8">
          <ul className="flex items-center gap-4">
            {navItems.map((item) => (
              <NavLink label={item.label} href={item.href} key={item.label} />
            ))}
          </ul>

          <div className="flex items-center gap-8">
            <Input type="text" placeholder="Search here..." />

            <Link
              href="/cart"
              className={buttonVariants({ variant: "outline" })}
            >
              <ShoppingCart className="w-4 h-4" />
            </Link>

            {isPending ? (
              <Skeleton className="bg-muted size-8 shrink-0 rounded-full" />
            ) : session ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={session?.user?.image as string} />
                    <AvatarFallback>
                      {session?.user?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={10}>
                  <DropdownMenuItem>
                    <Link href="/account" className="text-center w-full">
                      Account
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/account/orders" className="text-center w-full">
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem>
                      <Link href="/dashboard" className="text-center w-full">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <Separator className="my-2" />
                  <SignOutButton className="w-full" />
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <UserAuth className="flex gap-4 items-center" />
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-center gap-8">
          <Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              {navItems.map((item) => (
                <NavLink label={item.label} href={item.href} key={item.label} />
              ))}
              {isAdmin && (
                <NavLink
                  label="Dashboard"
                  href="/dashboard"
                  className="text-center w-full"
                />
              )}
              <Separator />
              {isPending ? (
                <Skeleton className="bg-muted size-8 shrink-0 rounded-full" />
              ) : session ? (
                <div className="px-8 flex  items-start justify-between gap-4">
                  <Link
                    href="/account"
                    className={cn("flex items-center gap-4")}
                  >
                    <Avatar>
                      <AvatarImage src={session?.user?.image as string} />
                      <AvatarFallback>
                        {session?.user?.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">
                      {session?.user?.name}
                    </span>
                  </Link>
                  <SignOutButton />
                </div>
              ) : (
                <UserAuth className="flex flex-col items-center justify-center gap-4 px-4" />
              )}
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
