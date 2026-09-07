"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Mail, MessageCircle, Phone, X } from "lucide-react";

const phoneNumber = "+919606364400";
const displayPhoneNumber = "+91 9606364400";
const emailAddress = "info@volterraenergy.in";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[min(90vw,20rem)] rounded-2xl border border-white/15 bg-[#08111d]/95 p-3 shadow-2xl backdrop-blur-xl"
          >
            {/* <p className="px-2 pb-2 text-left text-sm font-semibold text-white">
              Get in touch
            </p> */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-400/15 text-lime-400">
                <Phone size={19} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-white">Call Us</span>
                <span className="block truncate text-xs text-gray-300">{displayPhoneNumber}</span>
              </span>
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-400/15 text-lime-400">
                <Mail size={19} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-white">Email Us</span>
                <span className="block truncate text-xs text-gray-300">{emailAddress}</span>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-lime-500 text-[#08111d] shadow-lg shadow-lime-500/30 transition-all duration-300 hover:scale-110 hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
