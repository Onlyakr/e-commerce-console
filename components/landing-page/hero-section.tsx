import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="container py-12 px-4 mx-auto flex flex-col-reverse gap-8 lg:flex-row lg:gap-12">
        <div className="flex flex-col gap-4">
          <Badge className="uppercase text-primary" variant="outline">
            New Season
          </Badge>
          <h1 className="flex text-4xl font-bold gap-2 md:text-5xl lg:text-6xl lg:flex-col">
            Summer
            <span className="flex gap-2">
              Collection <span className="text-primary">2025</span>
            </span>
          </h1>
          <p className="text-muted-foreground ">
            Discover the latest trends in gaming and entertainment.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/shop"
              className={`${buttonVariants({ variant: "default", size: "lg" })}`}
            >
              Shop Now
            </Link>
            <Link
              href="/shop"
              className={`${buttonVariants({ variant: "outline", size: "lg" })}`}
            >
              View Collection
            </Link>
          </div>
          <Separator className="w-full mb-4" />
          <div className="flex items-center gap-16">
            <div className="flex flex-col items-start">
              <h2 className="flex gap-2 items-center text-xl font-bold ">
                2k+
              </h2>
              <span className="text-muted-foreground text-sm md:text-base">
                New Products
              </span>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="flex gap-2 items-center text-xl font-bold ">
                500+
              </h2>
              <span className="text-muted-foreground text-sm md:text-base">
                Brands
              </span>
            </div>
          </div>
        </div>

        <div className="shadow-2xl flex-1">
          <Image
            src="/hero-image.png"
            alt="hero-image"
            width={500}
            height={500}
            className="object-cover h-96 w-full"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
