import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterLink {
  to: string;
  label: string;
  external?: boolean;
}

const links: Record<string, FooterLink[]> = {
  'Resources': [
    { to: '/faq', label: 'FAQ' },
    { to: '/about', label: 'About' },
    { to: 'https://www.ons.gov.uk', label: 'Data Sources', external: true }
  ],
  'Legal': [
    { to: '#', label: 'Privacy Policy' },
    { to: '#', label: 'Terms of Use' }
  ]
};

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      {Object.entries(links).map(([category, categoryLinks]) => (
        <div key={category}>
          <h3 className="text-sm font-semibold text-slate-900 mb-4">{category}</h3>
          <ul className="space-y-3">
            {categoryLinks.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 hover:text-red-600 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className="text-sm text-slate-600 hover:text-red-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-slate-400 hover:text-red-600 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-red-600 transition-colors">
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/leslie-akpareva-mba-ma-56a888182/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-red-600 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}