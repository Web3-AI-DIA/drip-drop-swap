'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Droplet, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto p-6 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-8"
        >
          <div className="text-[12rem] font-black text-[#3DF2FF]/5 leading-none select-none">
            404
          </div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center text-[#3DF2FF]"
          >
            <Droplet size={80} fill="currentColor" className="opacity-20" />
          </motion.div>
        </motion.div>

        <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">Lost in the Current?</h1>
        <p className="text-[#F5F9FF]/50 max-w-md mb-10 leading-relaxed font-medium">
          The page you are looking for has been swept away. Let&apos;s get you back to solid ground.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#3DF2FF] text-[#0A0F1F] px-8 py-4 rounded-2xl font-bold shadow-[0_0_20px_rgba(61,242,255,0.2)] hover:shadow-[0_0_30px_rgba(61,242,255,0.4)] transition-all"
          >
            <Home size={18} />
            Back to Dashboard
          </motion.button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
