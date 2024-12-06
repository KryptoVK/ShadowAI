import React, { useState, useEffect, useRef, memo } from 'react';
import { handleCommand } from '../utils/commandHandler';
import { TerminalHeader } from './TerminalHeader';
import { TerminalPrompt } from './TerminalPrompt';
import { Command } from '../types/terminal';

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [commands, setCommands] = useState<Command[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const processCommand = (cmd: string) => {
    const result = handleCommand(cmd);
    if (result === 'clear') {
      setCommands([]);
      return;
    }
    
    setCommands(prev => [
      ...prev,
      { input: cmd, output: '' },
      { input: '', output: result }
    ]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      processCommand(input.trim());
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <div className="bg-black/90 rounded-lg p-4 w-full h-full border border-green-500/30 backdrop-blur-sm">
      <TerminalHeader />
      
      <div ref={terminalRef} className="h-[calc(100%-3rem)] overflow-y-auto font-mono text-sm">
        {commands.map((cmd, i) => (
          <div key={i} className="mb-2">
            {cmd.input && <TerminalPrompt input={cmd.input} />}
            {cmd.output && (
              <div className="text-green-400 whitespace-pre-line pl-0">{cmd.output}</div>
            )}
          </div>
        ))}
        
        <div className="flex items-center">
          <TerminalPrompt input={input} isActive />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent border-none outline-none text-green-500 font-mono"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Terminal);
