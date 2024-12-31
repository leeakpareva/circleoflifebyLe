import React from 'react';
import { motion } from 'framer-motion';
import { AboutFeatureProps } from '../../types/about';

export function AboutFeature({ title, description, icon, index }: AboutFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="relative p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-slate-900">
            {title}
          </h3>
          <p className="mt-2 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}