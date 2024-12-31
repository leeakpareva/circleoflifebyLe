import React from 'react';
import { FAQItem } from './FAQItem';
import { faqData } from '../../data/faqData';

export function FAQList() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-slate-200 divide-y divide-slate-200">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          index={index}
        />
      ))}
    </div>
  );
}