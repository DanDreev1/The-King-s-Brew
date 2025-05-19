"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle, XCircle } from "lucide-react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      // эмуляция задержки отправки
      await new Promise((res) => setTimeout(res, 2000));

      // рандомно успех/ошибка для имитации
      const success = Math.random() > 0.2;

      if (success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset(); // сброс формы
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-white text-black">
      <div className="max-w-3xl mx-auto space-y-12">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MapPin className="h-5 w-5 text-rose-600" />
            <p>📍 221B Brew Street, London, UK</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Phone className="h-5 w-5 text-blue-600" />
            <p>+44 20 7946 0123</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Mail className="h-5 w-5 text-emerald-600" />
            <p>hello@kingsbrew.uk</p>
          </div>
          <p className="text-sm text-gray-600">Open daily: 8:00 AM – 6:00 PM</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <textarea
            placeholder="Your message"
            className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div className="mt-4 flex items-center text-green-600 gap-2 text-sm">
              <CheckCircle className="h-4 w-4" />
              Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 flex items-center text-red-600 gap-2 text-sm">
              <XCircle className="h-4 w-4" />
              Something went wrong. Please try again.
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
}
