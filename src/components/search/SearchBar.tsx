import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchResults } from './SearchResults';
import { useSearch } from '../../hooks/useSearch';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { results, isLoading } = useSearch(query);

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="relative flex items-center">
          <Search size={18} className="absolute left-3 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search statistics, terms..."
            className="pl-10 pr-4 py-2 w-64 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
      </div>

      {isOpen && query.length > 0 && (
        <SearchResults results={results} isLoading={isLoading} />
      )}
    </div>
  );
}