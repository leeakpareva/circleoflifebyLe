import React from 'react';
import { Users, Heart, UserMinus, TrendingUp } from 'lucide-react';
import { HeroBanner } from '../hero/HeroBanner';
import { StatCard } from '../StatCard';
import { BirthRateChart } from '../charts/BirthRateChart';
import { DeathRateChart } from '../charts/DeathRateChart';
import { PreventiveMeasures } from '../sections/PreventiveMeasures';
import { EconomicImpact } from '../sections/EconomicImpact';
import { SocialImpact } from '../sections/SocialImpact';
import { Recommendations } from '../sections/Recommendations';
import { FadeIn } from '../animations/FadeIn';
import { SlideIn } from '../animations/SlideIn';

export function Dashboard() {
  const stats = [
    {
      title: "Birth Rate",
      value: "10.2 per 1,000",
      trend: -2.3,
      icon: <Users size={24} />,
      delay: 0.1
    },
    {
      title: "Death Rate",
      value: "9.4 per 1,000",
      trend: 1.5,
      icon: <Heart size={24} />,
      delay: 0.2
    },
    {
      title: "Natural Growth",
      value: "0.8 per 1,000",
      trend: -3.8,
      icon: <TrendingUp size={24} />,
      delay: 0.3
    },
    {
      title: "Infant Mortality",
      value: "3.7 per 1,000",
      trend: -0.5,
      icon: <UserMinus size={24} />,
      delay: 0.4
    }
  ];

  return (
    <>
      <HeroBanner />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SlideIn direction="left" delay={0.4}>
            <BirthRateChart />
          </SlideIn>
          <SlideIn direction="right" delay={0.5}>
            <DeathRateChart />
          </SlideIn>
        </div>

        <div className="space-y-8">
          <FadeIn delay={0.6}>
            <PreventiveMeasures />
          </FadeIn>
          <FadeIn delay={0.7}>
            <EconomicImpact />
          </FadeIn>
          <FadeIn delay={0.8}>
            <SocialImpact />
          </FadeIn>
          <FadeIn delay={0.9}>
            <Recommendations />
          </FadeIn>
        </div>
      </main>
    </>
  );
}