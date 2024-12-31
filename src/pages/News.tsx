import React from 'react';
import { NewsHeader } from '../components/news/NewsHeader';
import { NewsGrid } from '../components/news/NewsGrid';
import { SubscribeSection } from '../components/news/SubscribeSection';

export function News() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsHeader />
        <NewsGrid />
        <SubscribeSection />
      </div>
    </div>
  );
}