"use client";

import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-white text-black transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <Coffee className="mx-auto h-12 w-12" />
        <h1 className="text-4xl font-bold">The King's Brew</h1>
        <p className="text-gray-600 text-lg">Where every sip feels royal.</p>
        <Link
          href="/menu"
          className="inline-block mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          View Menu
        </Link>
      </motion.div>
    </main>
  );
}