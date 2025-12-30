import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

type FeatureProductCardProps = {
  name: string;
  price: number;
  slug: string;
  category: string;
};

const FeatureProductCard = ({
  name,
  price,
  category,
  slug,
}: FeatureProductCardProps) => {
  return (
    <Link href={`/product/${slug}`}>
      <Card className="pt-0">
        <Image
          src="/test.png"
          alt={name}
          width={100}
          height={100}
          className="w-full h-48 object-cover"
        />
        <CardHeader>
          <CardDescription>{category}</CardDescription>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>${price}</CardContent>
      </Card>
    </Link>
  );
};

export default FeatureProductCard;
