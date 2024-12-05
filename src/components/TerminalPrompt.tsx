import React from 'react';

interface TerminalPromptProps {
  input: string;
  isActive?: boolean;
}

export function TerminalPrompt({ input, isActive = false }: TerminalPromptProps) {
  return (
    <div className="text-green-500">
      <span className="text-green-700">root@shadow-ai</span>:<span className="text-blue-500">~</span>$ {!isActive && input}
    </div>
  );
}