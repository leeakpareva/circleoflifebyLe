import { SearchResult } from '../types/search';

export const searchData: SearchResult[] = [
  {
    id: '1',
    title: 'Birth Rate',
    description: 'Current UK birth rate statistics and trends',
    url: '/statistics#birth-rate',
    category: 'statistic'
  },
  {
    id: '2',
    title: 'Death Rate',
    description: 'Analysis of mortality rates and patterns',
    url: '/statistics#death-rate',
    category: 'statistic'
  },
  {
    id: '3',
    title: 'Per 1,000 Population',
    description: 'Understanding demographic rate calculations',
    url: '/faq#per-1000',
    category: 'term'
  },
  {
    id: '4',
    title: 'Dependency Ratio',
    description: 'Economic impact of population age structure',
    url: '/faq#dependency-ratio',
    category: 'faq'
  }
];