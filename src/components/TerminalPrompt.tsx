import React, { memo } from 'react';

interface TerminalPromptProps {
  input: string;
  isActive?: boolean;
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = memo(({ input, isActive = false }) => {
  return (
    <div className="text-green-500">
      <span className="text-green-700">root@shadow-ai</span>:<span className="text-blue-500">~</span>$ {!isActive && input}
    </div>
  );
});
