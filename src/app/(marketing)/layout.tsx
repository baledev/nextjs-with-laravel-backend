import { Toaster } from '@/components/ui/toaster'
import Navbar from "@/components/Navbar";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
