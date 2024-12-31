import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, GraduationCap, Home } from 'lucide-react';

const impacts = [
  {
    icon: <Briefcase className="text-red-500" size={24} />,
    title: "Economic Impact",
    metrics: [
      { label: "GDP Growth Impact", value: "-0.7% (2023)" },
      { label: "Labor Shortage", value: "1.2M workers" },
      { label: "Pension Cost", value: "+£8.2B annually" }
    ]
  },
  {
    icon: <Heart className="text-red-500" size={24} />,
    title: "Healthcare Impact",
    metrics: [
      { label: "NHS Spending", value: "+£4.3B annually" },
      { label: "Care Home Demand", value: "+32% by 2030" },
      { label: "Healthcare Workers Needed", value: "170,000+" }
    ]
  },
  {
    icon: <GraduationCap className="text-red-500" size={24} />,
    title: "Education Impact",
    metrics: [
      { label: "School Enrollment", value: "-5% by 2025" },
      { label: "Teacher Demand", value: "-3.2% annually" },
      { label: "Education Budget", value: "£2.1B adjustment" }
    ]
  },
  {
    icon: <Home className="text-red-500" size={24} />,
    title: "Housing Impact",
    metrics: [
      { label: "Housing Demand", value: "-8% by 2030" },
      { label: "Property Values", value: "-2.3% projected" },
      { label: "Care Home Construction", value: "+45% needed" }
    ]
  }
];

export function ImpactAnalysis() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {impacts.map((impact, index) => (
        <motion.div
          key={impact.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
        >
          <div className="flex items-center gap-3 mb-4">
            {impact.icon}
            <h3 className="text-lg font-semibold text-slate-900">{impact.title}</h3>
          </div>
          <div className="space-y-3">
            {impact.metrics.map((metric) => (
              <div key={metric.label} className="flex justify-between items-center">
                <span className="text-slate-600">{metric.label}</span>
                <span className="font-semibold text-red-600">{metric.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}