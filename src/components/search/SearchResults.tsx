import React from 'react';
import { motion } from 'framer-motion';
import { SearchResult } from '../../types/search';
import { Loader } from 'lucide-react';

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
}

export function SearchResults({ results, isLoading }: SearchResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-slate-200 max-h-96 overflow-y-auto z-50"
    >
      {isLoading ? (
        <div className="flex items-center justify-center p-4">
          <Loader size={20} className="animate-spin text-red-500" />
        </div>
      ) : results.length > 0 ? (
        <ul className="py-2">
          {results.map((result) => (
            <li key={result.id}>
              <a
                href={result.url}
                className="block px-4 py-2 hover:bg-slate-50 transition-colors"
              >
                <div className="font-medium text-slate-900">{result.title}</div>
                <div className="text-sm text-slate-600">{result.description}</div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4 text-center text-slate-600">
          No results found
        </div>
      )}
    </motion.div>
  );
}