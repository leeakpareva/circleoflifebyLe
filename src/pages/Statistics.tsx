import React from 'react';
import { StatsHeader } from '../components/statistics/StatsHeader';
import { QuickStats } from '../components/statistics/QuickStats';
import { ImpactAnalysis } from '../components/statistics/ImpactAnalysis';
import { Recommendations } from '../components/statistics/Recommendations';

export function Statistics() {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatsHeader />
        <QuickStats />
        <div className="mt-12">
          <ImpactAnalysis />
        </div>
        <div className="mt-12">
          <Recommendations />
        </div>
      </div>
    </div>
  );
}