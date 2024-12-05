const COMMANDS = {
  help: `Available commands:
/help - Show this help message
/about - About Shadow AI
/social - Social media links
/clear - Clear terminal
/status - System status`,
  
  about: 'Shadow AI: Advanced neural network system designed for the shadows. Version 1.0.0',
  
  social: 'Twitter: @Shadow_AI\nWebsite: shadow-ai.com',
  
  status: `System Status: OPERATIONAL
Neural Network: ACTIVE
Security Level: MAXIMUM
Memory Usage: 32GB/128GB
Uptime: 342 days
Threat Level: LOW`
};

export function handleCommand(cmd: string): string | 'clear' {
  const command = cmd.toLowerCase();
  
  if (command === '/clear') {
    return 'clear';
  }
  
  const commandKey = command.slice(1);
  if (COMMANDS[commandKey]) {
    return COMMANDS[commandKey];
  }
  
  return 'Command not recognized. Type /help for available commands.';
}