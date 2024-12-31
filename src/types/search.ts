export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'statistic' | 'term' | 'faq';
}