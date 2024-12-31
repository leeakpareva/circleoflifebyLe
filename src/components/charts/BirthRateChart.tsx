import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { birthRateData } from '../../data/demographicData';
import { Chart } from '../Chart';

export function BirthRateChart() {
  return (
    <Chart title="Annual Birth Rate Trend (2018-2023)">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={birthRateData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            tick={{ fill: '#6B7280' }}
          />
          <YAxis
            tick={{ fill: '#6B7280' }}
            domain={[8, 12]}
            label={{
              value: 'per 1,000 population',
              angle: -90,
              position: 'insideLeft',
              style: { fill: '#6B7280' }
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '0.375rem'
            }}
          />
          <Line
            type="monotone"
            dataKey="rate"
            stroke="#DC2626"
            strokeWidth={2}
            dot={{ fill: '#DC2626' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Chart>
  );
}