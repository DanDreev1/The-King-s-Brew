// src/components/Header.tsx
"use client";

import Link from "next/link";
import { Coffee } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
      <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
        <Coffee className="h-6 w-6" />
        <span>Header</span> {/* <-- изменено название */}
      </Link>
      <nav className="space-x-6 text-sm font-medium">
        <Link href="/menu" className="hover:text-gray-600">Menu</Link>
        <Link href="/about" className="hover:text-gray-600">About</Link>
        <Link href="/contact" className="hover:text-gray-600">Contact</Link>
      </nav>
    </header>
  );
}
