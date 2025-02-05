import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b border-sidebar-border bg-sidebar px-2">
      <SidebarTrigger />
      <Button>Sign in</Button>
    </nav>
  );
}
