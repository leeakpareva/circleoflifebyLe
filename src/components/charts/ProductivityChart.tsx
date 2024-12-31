import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Chart } from '../Chart';

const productivityData = [
  { year: 2019, laborProductivity: 100, workforceSize: 100 },
  { year: 2020, laborProductivity: 98.5, workforceSize: 99.1 },
  { year: 2021, laborProductivity: 97.2, workforceSize: 98.3 },
  { year: 2022, laborProductivity: 96.8, workforceSize: 97.2 },
  { year: 2023, laborProductivity: 95.9, workforceSize: 96.1 }
];

export function ProductivityChart() {
  return (
    <Chart title="Productivity & Workforce Trends (2019 Base: 100)">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={productivityData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis 
            dataKey="year"
            tick={{ fill: '#6B7280' }}
          />
          <YAxis
            tick={{ fill: '#6B7280' }}
            domain={[90, 105]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '0.375rem'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="laborProductivity"
            name="Labor Productivity"
            stroke="#DC2626"
            strokeWidth={2}
            dot={{ fill: '#DC2626' }}
          />
          <Line
            type="monotone"
            dataKey="workforceSize"
            name="Workforce Size"
            stroke="#991B1B"
            strokeWidth={2}
            dot={{ fill: '#991B1B' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Chart>
  );
}