import React from 'react';
import { AboutHeader } from '../components/about/AboutHeader';
import { AboutContent } from '../components/about/AboutContent';
import { CreatorSection } from '../components/about/CreatorSection';
import { ProjectLead } from '../components/about/ProjectLead';

export function About() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeader />
        <AboutContent />
        <CreatorSection />
        <ProjectLead />
      </div>
    </div>
  );
}