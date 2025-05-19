import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The King's Brew",
  description: "A cozy coffee shop in London",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen font-sans bg-white text-black ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}