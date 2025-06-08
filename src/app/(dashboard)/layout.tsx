import type { Metadata } from "next";
import "@/app/globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Tropa Digital",
  description: "Tropa Digital",
  icons: {
    icon: "/favicon.svg", 
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex overflow-x-scroll overflow-y-auto md:overflow-x-hidden md:overflow-y-hidden">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
