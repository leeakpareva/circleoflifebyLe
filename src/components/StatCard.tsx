import React from 'react';
import { motion } from 'framer-motion';
import { cardHoverVariants } from '../styles/animations';

interface StatCardProps {
  title: string;
  value: string;
  trend: number;
  icon: React.ReactNode;
}

export function StatCard({ title, value, trend, icon }: StatCardProps) {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
      className="bg-gradient-to-br from-white to-red-50/30 rounded-xl p-6 shadow-lg border border-red-100 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 mt-1"
          >
            {value}
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`flex items-center mt-2 ${trend >= 0 ? 'text-green-600' : 'text-red-600'} font-medium`}
          >
            <span className="text-sm">
              {trend >= 0 ? '+' : ''}{trend}%
            </span>
          </motion.div>
        </div>
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="text-red-500 bg-red-50 p-3 rounded-lg"
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
}