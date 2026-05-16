"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919327052242"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 transition duration-300 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}