import React from 'react';

export function MatrixBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),rgba(0,0,0,0.8))]" />
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 font-mono text-xs animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 20 }).map(() =>
              Math.random().toString(36).charAt(2)
            ).join('\n')}
          </div>
        ))}
      </div>
    </>
  );
}