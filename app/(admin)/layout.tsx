import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import { redirect } from "next/navigation";
import { isAdmin } from "@/dal/user";
import Logo from "@/components/common/logo";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { success } = await isAdmin();

  if (!success) {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <header className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div>Dashboard Header</div>
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}
