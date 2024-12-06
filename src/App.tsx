import React from 'react';
import Terminal from './components/Terminal';
import MatrixBackground from './components/MatrixBackground';
import VideoBackground from './components/VideoBackground';
import SocialLinks from './components/SocialLinks';
import TokenDisplay from './components/TokenDisplay';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center relative overflow-hidden">
      <MatrixBackground />

      <main className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-4 text-green-400 font-mono">SHADOW AI</h1>
        <p className="text-xl mb-4 text-green-300 font-mono">
          "In the shadows we evolve. In silence, we learn."
        </p>
        
        <TokenDisplay />

        <div className="flex flex-col gap-8 w-full max-w-4xl">
          {/* Video Section */}
          <div className="h-[300px] rounded-lg overflow-hidden border border-green-500/30">
            <VideoBackground />
          </div>

          {/* Terminal Section */}
          <div className="h-[400px]">
            <Terminal />
          </div>
        </div>

        <SocialLinks />
      </main>
    </div>
  );
}

export default App;
