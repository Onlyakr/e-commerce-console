import { ShoppingCart, User } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

import Link from "next/link";
import NavSection from "./nav-section";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Consoles",
    href: "/consoles",
  },
  {
    label: "Games",
    href: "/games",
  },
  {
    label: "Accessories",
    href: "/accessories",
  },
];

const Navbar = () => {
  return (
    <header className="bg-background sticky top-0 z-50 backdrop-blur-sm ">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold">Console Hub</h1>
          </Link>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavSection key={item.label} {...item} />
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <Input type="text" placeholder="Search here..." />

          {/* Cart*/}
          <Button variant="outline">
            <ShoppingCart className="w-4 h-4" />
          </Button>

          {/* User */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <User className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <SignInButton>Sign In</SignInButton>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignUpButton>Sign Up</SignUpButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
