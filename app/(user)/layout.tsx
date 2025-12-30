import { isAuthenticated } from "@/dal/user";

import Footer from "@/components/layout/footer/footer";
import Navbar from "@/components/layout/navbar/navbar";
import { redirect } from "next/navigation";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const { success } = await isAuthenticated();

  if (!success) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col min-h-svh bg-muted">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default UserLayout;
