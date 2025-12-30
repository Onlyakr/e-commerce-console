import { Skeleton } from "../ui/skeleton";
import { Card } from "../ui/card";

import Image from "next/image";
import Link from "next/link";

export type CategoryCardProps = {
  label: string;
  image: string;
  href: string;
};

const CategoryCard = ({ label, image, href }: CategoryCardProps) => {
  return (
    <Link href={href}>
      <Card className="p-0">
        <Image
          src={image}
          alt={label}
          width={100}
          height={100}
          className="w-full h-48 object-cover"
        />
        <p>{label}</p>
      </Card>
    </Link>
  );
};

export default CategoryCard;
