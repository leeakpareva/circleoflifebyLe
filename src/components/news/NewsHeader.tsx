import React from 'react';
import { motion } from 'framer-motion';

export function NewsHeader() {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-slate-900"
      >
        Latest Demographic News
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-4 max-w-2xl mx-auto text-xl text-slate-600"
      >
        Stay informed about demographic trends and their economic impact
      </motion.p>
    </div>
  );
}