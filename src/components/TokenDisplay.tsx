import React, { memo, useState, useCallback } from 'react';
import { Key, Check, Copy } from 'lucide-react';

const TOKEN = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

const TokenDisplay: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(TOKEN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  return (
    <div 
      onClick={handleCopy}
      className="flex items-center justify-center gap-2 text-green-400/80 font-mono text-sm mb-8 
                bg-black/30 py-2 px-4 rounded-lg border border-green-500/20 backdrop-blur-sm
                hover:bg-black/40 transition-all group cursor-pointer select-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
      aria-label="Copy token"
    >
      <Key className="w-4 h-4 text-green-500/60 group-hover:text-green-500/80 transition-all" />
      <span className="font-mono tracking-wider">TOKEN CA: {TOKEN}</span>
      <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? (
          <Check className="w-4 h-4 text-green-500 animate-pulse" />
        ) : (
          <Copy className="w-4 h-4 text-green-500/60" />
        )}
      </div>
    </div>
  );
};

export default memo(TokenDisplay);
