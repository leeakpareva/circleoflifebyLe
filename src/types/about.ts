import { ReactNode } from 'react';

export interface AboutFeatureData {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface AboutFeatureProps extends AboutFeatureData {
  index: number;
}