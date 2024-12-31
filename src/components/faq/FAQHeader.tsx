import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export function FAQHeader() {
  return (
    <div className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center mb-4"
      >
        <HelpCircle size={48} className="text-red-500" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl font-bold text-slate-900"
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 max-w-2xl mx-auto text-xl text-slate-600"
      >
        Understanding demographic terms and statistics
      </motion.p>
    </div>
  );
}