"use client";

import { motion } from "framer-motion";
import { Coffee, Users, MapPin } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Sophie Clark",
    role: "Head Barista",
    icon: <Coffee className="h-5 w-5 text-amber-600" />,
  },
  {
    name: "Liam Bennett",
    role: "Pastry Chef",
    icon: <Users className="h-5 w-5 text-orange-500" />,
  },
  {
    name: "Amelia Rose",
    role: "Community Manager",
    icon: <Users className="h-5 w-5 text-teal-600" />,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src="/menu/espresso.jpg"
          alt="Coffee shop"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            The King’s Brew
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Where London wakes up with taste and tradition.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/menu/croissant.jpg"
            alt="Story"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </motion.div>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            The King’s Brew was born from a simple idea: to slow down. In the heart of London’s fast-paced rhythm, we envisioned a place where people could pause — not just for coffee, but for conversation, for connection, and for comfort.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Every morning begins before sunrise. We handpick seasonal beans, grind them in-house, and brew with precision. But it’s not just about the drink. It’s the feeling — the warm aroma as you step inside, the friendly nod from your barista, the worn-in corners of our shop where stories are shared.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            We’re proud to support local roasters, ethical farms, and artisanal bakers. Our pastries are baked fresh each morning. Our playlists are curated to match the mood of the street. And our walls — they tell the stories of artists, writers, travelers, and neighbors who’ve become part of our story.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            The King’s Brew isn’t just a coffee shop. It’s a quiet rebellion against the rush. It’s a place to be, not just to buy. And we’re honored to welcome you in — cup after cup, day after day.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-2xl font-semibold mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet the Team
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {member.icon}
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6 text-center">
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <MapPin className="mx-auto mb-4 text-rose-600 h-6 w-6" />
          <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
          <p className="text-gray-700">
            📍 221B Brew Street, London, UK
            <br />
            Open daily: <strong>8:00 AM – 6:00 PM</strong>
          </p>
        </motion.div>
      </section>
    </div>
  );
}