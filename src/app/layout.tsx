import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OWSD BOOTCAMP",
  description: "For To Register for OWSD Bootcamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Toaster
            position="bottom-right"
            toastOptions={{ duration: 10000 }}
          />
        {children}
      </body>
    </html>
  );
}
