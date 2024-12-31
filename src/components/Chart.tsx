import React from 'react';
import { motion } from 'framer-motion';
import { cardHoverVariants } from '../styles/animations';

interface ChartProps {
  title: string;
  children: React.ReactNode;
}

export function Chart({ title, children }: ChartProps) {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover" 
      className="bg-gradient-to-br from-white to-red-50/30 rounded-xl p-6 shadow-lg border border-red-100"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-red-100 pb-3">{title}</h3>
      <div className="h-64 flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}