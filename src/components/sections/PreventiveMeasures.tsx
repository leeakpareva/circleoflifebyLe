import React from 'react';
import { ShieldCheck, Baby, HeartPulse, School } from 'lucide-react';
import { motion } from 'framer-motion';

interface MeasureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function MeasureCard({ title, description, icon, delay }: MeasureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white p-6 rounded-xl shadow-lg border border-red-100"
    >
      <div className="flex items-start space-x-4">
        <div className="text-red-500 mt-1">{icon}</div>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function PreventiveMeasures() {
  const measures = [
    {
      icon: <HeartPulse size={24} />,
      title: "Healthcare Access",
      description: "Improving access to prenatal and postnatal care services across all regions",
      delay: 0.1
    },
    {
      icon: <Baby size={24} />,
      title: "Family Support",
      description: "Enhanced parental leave policies and childcare support systems",
      delay: 0.2
    },
    {
      icon: <School size={24} />,
      title: "Education",
      description: "Public health education and family planning resources",
      delay: 0.3
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Social Protection",
      description: "Strengthened social safety nets for vulnerable populations",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Preventive Measures</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {measures.map((measure) => (
          <MeasureCard key={measure.title} {...measure} />
        ))}
      </div>
    </div>
  );
}