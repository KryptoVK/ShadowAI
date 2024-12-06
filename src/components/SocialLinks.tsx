import React, { memo } from 'react';
import { Twitter, ExternalLink } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <a
        href="https://twitter.com/Shadow_AI"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-400 transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a
        href="https://shadow-ai.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-400 transition-colors"
      >
        <ExternalLink className="w-6 h-6" />
      </a>
    </div>
  );
};

export default memo(SocialLinks);
