"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

const NavSection = ({ label, href }: { label: string; href: string }) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
};
export default NavSection;
