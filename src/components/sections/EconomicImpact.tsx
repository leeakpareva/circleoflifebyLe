import React from 'react';
import { Wallet, TrendingDown, Users, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductivityChart } from '../charts/ProductivityChart';

interface ImpactPointProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  delay: number;
}

function ImpactPoint({ icon, title, value, description, delay }: ImpactPointProps) {
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

export function EconomicImpact() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Economic Impact</h3>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImpactPoint
            icon={<Wallet size={24} />}
            title="GDP Growth Impact"
            value="-0.7% (2023)"
            description="Direct effect on economic growth due to demographic changes"
            delay={0.1}
          />
          <ImpactPoint
            icon={<TrendingDown size={24} />}
            title="Labor Force"
            value="-2.1% projected by 2030"
            description="Declining working-age population affecting labor market"
            delay={0.2}
          />
          <ImpactPoint
            icon={<Users size={24} />}
            title="Dependency Ratio"
            value="32.1%"
            description="Increasing ratio of dependents to working population"
            delay={0.3}
          />
          <ImpactPoint
            icon={<Building2 size={24} />}
            title="Public Services"
            value="£3.2B additional cost"
            description="Increased pressure on healthcare and social services"
            delay={0.4}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="h-80"
        >
          <ProductivityChart />
        </motion.div>
      </div>
    </div>
  );
}