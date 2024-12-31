import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Baby, Heart, Users } from 'lucide-react';

interface QuickStatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

function QuickStat({ icon, label, value, change, isPositive }: QuickStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg p-6 shadow-md border border-slate-200"
    >
      <div className="flex items-center justify-between">
        <div className="text-red-500">{icon}</div>
        <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        <div className="text-sm text-slate-600">{label}</div>
      </div>
    </motion.div>
  );
}

export function QuickStats() {
  const stats = [
    {
      icon: <Baby size={24} />,
      label: "Birth Rate",
      value: "10.2 per 1,000",
      change: "-2.3%",
      isPositive: false
    },
    {
      icon: <Heart size={24} />,
      label: "Life Expectancy",
      value: "81.3 years",
      change: "+0.5%",
      isPositive: true
    },
    {
      icon: <TrendingDown size={24} />,
      label: "Death Rate",
      value: "9.4 per 1,000",
      change: "+1.5%",
      isPositive: false
    },
    {
      icon: <Users size={24} />,
      label: "Population Growth",
      value: "0.8 per 1,000",
      change: "-3.8%",
      isPositive: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <QuickStat key={stat.label} {...stat} />
      ))}
    </div>
  );
}