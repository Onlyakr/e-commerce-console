import { isAuthenticated } from "@/dal/user";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const { success } = await isAuthenticated();

  if (success) {
    redirect("/");
  }

  return <div>{children}</div>;
};
export default AuthLayout;
