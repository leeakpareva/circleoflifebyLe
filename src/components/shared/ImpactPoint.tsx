import React from 'react';
import { motion } from 'framer-motion';

interface ImpactPointProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  delay: number;
}

export function ImpactPoint({ icon, title, value, description, delay }: ImpactPointProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-start space-x-3"
    >
      <div className="text-red-500 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-red-600 font-semibold">{value}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}