import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Umbrella Tech",
  description: "Soluções para Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className="flex flex-col justify-center items-center">
    <html lang="en" className={inter.className}>
      <body className="w-full mx-auto m-0 b-0 box-border overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
