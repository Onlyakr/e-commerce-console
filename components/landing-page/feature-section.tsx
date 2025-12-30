import { buttonVariants } from "../ui/button";

import Link from "next/link";
import FeatureProductCard from "./feature-card";

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    slug: "product-1",
    description: "Product 1 description",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category 2",
    slug: "product-2",
    description: "Product 2 description",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    category: "Category 3",
    slug: "product-3",
    description: "Product 3 description",
    price: 300,
  },
  {
    id: 4,
    name: "Product 4",
    category: "Category 4",
    slug: "product-4",
    description: "Product 4 description",
    price: 400,
  },
];

const FeatureSection = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-8 py-12 px-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <p className="text-muted-foreground">
            We offer a wide range of products for all your gaming needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <FeatureProductCard
              key={product.id}
              {...product}
            ></FeatureProductCard>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link
            href="/shop"
            className={`${buttonVariants({ variant: "outline" })} cursor-pointer w-full max-w-xs`}
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;
