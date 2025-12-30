// import { Gamepad } from "lucide-react";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 font-medium">
      <h1 className="text-2xl font-bold">
        <span className="text-primary">C</span>zone
      </h1>
    </Link>
  );
};
export default Logo;
