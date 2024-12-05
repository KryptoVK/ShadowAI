import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export function TerminalHeader() {
  return (
    <div className="flex items-center gap-2 mb-4 border-b border-green-500/30 pb-2">
      <TerminalIcon className="w-5 h-5 text-green-500" />
      <span className="text-green-500 font-mono">Shadow AI Terminal v1.0.0</span>
      <span className="ml-auto text-green-500/50 text-sm">Type /help for commands</span>
    </div>
  );
}