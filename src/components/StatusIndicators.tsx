import React from 'react';
import { Shield, Cpu, Database, Activity } from 'lucide-react';

export function StatusIndicators() {
  return (
    <div className="flex gap-6 mb-8">
      {[
        { icon: Shield, label: 'Security', status: 'ACTIVE' },
        { icon: Cpu, label: 'Neural Net', status: 'ONLINE' },
        { icon: Database, label: 'Memory', status: '98.2%' },
        { icon: Activity, label: 'System', status: 'OPTIMAL' },
      ].map(({ icon: Icon, label, status }) => (
        <div key={label} className="flex flex-col items-center group">
          <div className="relative">
            <Icon className="w-6 h-6 text-green-500 mb-2" />
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-xs text-green-400 font-mono mb-1">{label}</span>
          <span className="text-xs text-green-500 font-mono">{status}</span>
        </div>
      ))}
    </div>
  );
}