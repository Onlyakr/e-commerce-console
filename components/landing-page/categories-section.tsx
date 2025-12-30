import { ArrowRightIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    label: "Consoles",
    image: "/test.png",
    href: "/shop?category=consoles",
  },
  {
    label: "Games",
    image: "/test.png",
    href: "/shop?category=games",
  },
  {
    label: "Accessories",
    image: "/test.png",
    href: "/shop?category=accessories",
  },
];

const CategoriesSection = () => {
  return (
    <section className="bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col gap-8 py-12 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <Link
            href="/shop"
            className={`${buttonVariants({ variant: "link" })}`}
          >
            <ArrowRightIcon className="w-4 h-4" /> View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative">
            <Image
              src="/test.png"
              alt="Category 1"
              width={100}
              height={100}
              className="w-full h-48 object-cover"
            />
            <p className="absolute bottom-4 left-4">Consoles</p>
          </div>
          <div className="relative">
            <Image
              src="/test.png"
              alt="Category 2"
              width={100}
              height={100}
              className="w-full h-48 object-cover"
            />
            <p className="absolute bottom-4 left-4">Games</p>
          </div>
          <div className="relative md:max-lg:col-span-2">
            <Image
              src="/test.png"
              alt="Category 3"
              width={100}
              height={100}
              className="w-full h-48 object-cover"
            />
            <p className="absolute bottom-4 left-4">Accessories</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CategoriesSection;
