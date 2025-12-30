import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const SignOutButton = ({
  className,
  size,
}: {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
}) => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button
      onClick={handleSignOut}
      variant="destructive"
      className={cn(className, "cursor-pointer")}
      size={size || "default"}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
