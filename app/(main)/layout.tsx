import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { AppSidebar } from "./_components/app-sidebar";

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-2">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
