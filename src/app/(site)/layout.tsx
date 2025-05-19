// src/app/(site)/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${inter.className} pt-20`}>
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
}