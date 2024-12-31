interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: "What does 'per 1,000 population' mean?",
    answer: "This is a standardized way to measure rates in demographics. It shows how many events (births, deaths, etc.) occur per 1,000 people in a population. For example, a birth rate of 10 per 1,000 means that in a population of 1,000 people, there are 10 births per year on average. This makes it easier to compare rates between different regions or time periods."
  },
  {
    question: "What is the 'dependency ratio'?",
    answer: "The dependency ratio is the proportion of non-working age people (children under 15 and adults over 65) compared to working-age people (15-64). A higher ratio means fewer working-age people supporting more dependents, which can impact the economy and social services."
  },
  {
    question: "How is 'natural growth' calculated?",
    answer: "Natural growth (or natural change) is calculated by subtracting the death rate from the birth rate. A positive number means the population is growing naturally (more births than deaths), while a negative number indicates natural decline."
  },
  {
    question: "What is 'labor productivity'?",
    answer: "Labor productivity measures how much economic output is produced per hour of work. It's typically shown as an index where a base year equals 100. Changes in this index show whether workers are becoming more or less productive over time."
  },
  {
    question: "What does 'workforce size' represent?",
    answer: "Workforce size refers to the total number of people who are either employed or actively seeking employment (the labor force). It's often shown as an index (base year = 100) to easily track changes over time."
  },
  {
    question: "How accurate are the live statistics?",
    answer: "The live statistics are estimates based on annual averages. For example, UK birth and death rates are converted to per-minute figures to provide a real-time approximation. While not exact, they give a sense of demographic changes as they happen."
  }
];