import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { AppSidebar } from "./_components/app-sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookWorld - Down the Rabbit Hole",
  description:
    "A vibrant community for book lovers to share reviews, explore new reads, and immerse themselves in fascinating literary worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full p-2 px-3">
            <SidebarTrigger className="mb-2" />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
