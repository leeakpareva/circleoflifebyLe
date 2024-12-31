import React from 'react';
import { CounterDigit } from './CounterDigit';

interface AnimatedCounterProps {
  value: number;
  direction: 'left' | 'right';
}

export function AnimatedCounter({ value, direction }: AnimatedCounterProps) {
  const digits = value.toLocaleString().split('');
  
  return (
    <div className="inline-flex">
      {digits.map((digit, index) => (
        <React.Fragment key={`${index}-${digit}`}>
          {digit === ',' ? (
            <span className="mx-0.5">,</span>
          ) : (
            <CounterDigit digit={digit} direction={direction} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}