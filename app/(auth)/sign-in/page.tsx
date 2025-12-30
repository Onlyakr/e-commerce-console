import { SignInForm } from "@/components/form/sign-in-form";

import Image from "next/image";
import Logo from "@/components/common/logo";

export const metadata = {
  title: "czone | sign in",
};

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignInForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          alt="czone"
          src="/test.png"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
