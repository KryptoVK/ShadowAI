import React from 'react';
import { Twitter, ExternalLink } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="mt-8 flex justify-center gap-6">
      {[
        { icon: Twitter, href: 'https://twitter.com/Shadow_AI', label: 'Twitter' },
        { icon: ExternalLink, href: 'https://shadow-ai.com', label: 'Website' },
      ].map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Icon className="w-6 h-6 text-green-500 transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}