import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsArticle } from '../../types/news';

export function NewsCard({ title, excerpt, date, category, index }: NewsArticle & { index: number }) {
  // Function to add ONS link to specific text
  const renderExcerptWithLink = (text: string) => {
    const onsText = "ONS data";
    const index = text.indexOf(onsText);
    
    if (index === -1) return text;
    
    return (
      <>
        {text.substring(0, index)}
        <a 
          href="https://www.ons.gov.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 underline"
        >
          {onsText}
        </a>
        {text.substring(index + onsText.length)}
      </>
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-sm text-slate-500">
            <Calendar size={14} className="mr-1" />
            <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 mb-4">
          {renderExcerptWithLink(excerpt)}
        </p>
        
        <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors">
          Read more
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
}