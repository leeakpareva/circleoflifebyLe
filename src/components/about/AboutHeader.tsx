import React from 'react';
import { motion } from 'framer-motion';

export function AboutHeader() {
  return (
    <div className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-slate-900"
      >
        About Cycle of Life
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-4 max-w-2xl mx-auto text-xl text-slate-600"
      >
        Understanding the complex interplay between demographics and economics in the UK
      </motion.p>
    </div>
  );
}