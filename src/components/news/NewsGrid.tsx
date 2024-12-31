import React from 'react';
import { NewsCard } from './NewsCard';
import { newsArticles } from '../../data/newsArticles';

export function NewsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {newsArticles.map((article, index) => (
        <NewsCard key={article.id} {...article} index={index} />
      ))}
    </div>
  );
}