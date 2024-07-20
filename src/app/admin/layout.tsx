'use client'

import NavbarAdmin from "@/components/NavbarAdmin";
import Sidebar from "@/components/Sidebar";
import { useAuth } from "@/hooks/auth";
import Loading from "./Loading";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuth({ middleware: 'auth' })

  if (!user) {
    return <Loading />
  }

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Sidebar />

        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <NavbarAdmin />

          {children}
        </div>
      </div>
    </TooltipProvider>
  );
}
