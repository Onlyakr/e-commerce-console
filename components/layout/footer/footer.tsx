import Logo from "@/components/common/logo";
import Link from "next/link";
import { Github, LinkedinIcon } from "lucide-react";

const footerLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const footerSocials = [
  {
    label: "Github",
    href: "https://github.com/Onlyakr/e-commerce-console",
    icon: <Github />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akrawin-datchanee-8b6022384/",
    icon: <LinkedinIcon />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-background/70 z-50 backdrop-blur-sm outline-1 outline-border">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <Logo />

        <ul className="flex items-center gap-8">
          {footerSocials.map((social) => (
            <Link
              href={social.href}
              key={social.label}
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {social.icon}
            </Link>
          ))}
        </ul>

        <ul className="flex items-center gap-4 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground cursor-default">
          &copy; {new Date().getFullYear()} Czone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
