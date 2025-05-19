"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, CupSoda, Croissant, Leaf } from "lucide-react";
import Image from "next/image";

const allItems = [
  {
    name: "Royal Espresso",
    description: "Single-origin espresso with a rich crema.",
    price: "£2.50",
    image: "/menu/espresso.jpg",
    icon: <Coffee className="h-5 w-5 text-amber-700" />,
    category: "Coffee",
  },
  {
    name: "Iced Vanilla Latte",
    description: "Chilled espresso with vanilla & oat milk.",
    price: "£3.80",
    image: "/menu/iced-vanilla.jpg",
    icon: <CupSoda className="h-5 w-5 text-blue-500" />,
    category: "Cold",
  },
  {
    name: "Almond Croissant",
    description: "Buttery croissant filled with almond paste.",
    price: "£2.90",
    image: "/menu/croissant.jpg",
    icon: <Croissant className="h-5 w-5 text-orange-500" />,
    category: "Pastry",
  },
  {
    name: "Matcha Oat Latte",
    description: "Japanese matcha with creamy oat milk.",
    price: "£3.40",
    image: "/menu/matcha.jpg",
    icon: <Leaf className="h-5 w-5 text-green-600" />,
    category: "Vegan",
  },
  {
    name: "Chai Spice Latte",
    description: "Warming chai with oat milk and cinnamon.",
    price: "£3.60",
    image: "/menu/chai.jpg",
    icon: <Leaf className="h-5 w-5 text-yellow-600" />,
    category: "Vegan",
  },
  {
    name: "Caramel Macchiato",
    description: "Espresso with vanilla, milk and caramel.",
    price: "£3.90",
    image: "/menu/caramel.jpg",
    icon: <Coffee className="h-5 w-5 text-amber-600" />,
    category: "Coffee",
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped cold coffee with rich flavor.",
    price: "£3.20",
    image: "/menu/coldbrew.jpg",
    icon: <CupSoda className="h-5 w-5 text-blue-600" />,
    category: "Cold",
  },
  // добавь больше при желании
];

export default function MenuPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 3, allItems.length));
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  const visibleItems = allItems.slice(0, visibleCount);

  return (
    <div className="min-h-screen px-6 py-16 text-black bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Menu
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-xl shadow-md bg-gray-50 hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index < 2}
                  />
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-right font-medium text-gray-800">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Loader (появляется внизу, как триггер подгрузки) */}
        {visibleCount < allItems.length && (
          <div ref={loaderRef} className="h-12 mt-10 flex justify-center items-center">
            <span className="text-sm text-gray-500 animate-pulse">Loading more...</span>
          </div>
        )}
      </div>
    </div>
  );
}