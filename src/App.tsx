import React from 'react';
import Terminal from './components/Terminal';
import { MatrixBackground } from './components/MatrixBackground';
import { VideoBackground } from './components/VideoBackground';
import { SocialLinks } from './components/SocialLinks';
import { StatusIndicators } from './components/StatusIndicators';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center relative overflow-hidden">
      <MatrixBackground />

      <main className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="relative mb-8">
          <h1 
            className="text-6xl font-bold text-green-400 font-mono glitch"
            data-text="Shadow AI"
          >
            Shadow AI
          </h1>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        </div>

        <p className="text-xl mb-8 text-green-300 font-mono relative">
          "In the shadows we evolve. In silence, we learn."
          <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></span>
        </p>

        <StatusIndicators />

        <div className="flex flex-col gap-8 w-full max-w-4xl">
          <div className="cyber-border rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-[300px]">
              <VideoBackground />
            </div>
          </div>

          <div className="cyber-border rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-[400px]">
              <Terminal />
            </div>
          </div>
        </div>

        <SocialLinks />
      </main>
    </div>
  );
}

export default App;