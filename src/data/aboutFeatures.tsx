import React from 'react';
import { BarChart, Users, Brain, LineChart } from 'lucide-react';
import { AboutFeatureData } from '../types/about';

export const aboutFeatures: AboutFeatureData[] = [
  {
    icon: <BarChart className="text-indigo-600" size={24} />,
    title: "Data-Driven Insights",
    description: "Comprehensive analysis of UK demographic trends and their economic implications."
  },
  {
    icon: <Users className="text-indigo-600" size={24} />,
    title: "Population Dynamics",
    description: "Deep understanding of birth rates, death rates, and their societal impact."
  },
  {
    icon: <Brain className="text-indigo-600" size={24} />,
    title: "Policy Recommendations",
    description: "Evidence-based suggestions for addressing demographic challenges."
  },
  {
    icon: <LineChart className="text-indigo-600" size={24} />,
    title: "Economic Analysis",
    description: "Detailed examination of how demographic shifts affect the UK economy."
  }
];