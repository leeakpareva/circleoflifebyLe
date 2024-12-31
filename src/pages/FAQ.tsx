import React from 'react';
import { FAQHeader } from '../components/faq/FAQHeader';
import { FAQList } from '../components/faq/FAQList';

export function FAQ() {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQHeader />
        <FAQList />
      </div>
    </div>
  );
}