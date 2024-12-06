import React, { memo } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const VideoControls: React.FC<VideoControlsProps> = memo(({ isPlaying, onTogglePlay }) => {
  return (
    <button
      onClick={onTogglePlay}
      className="absolute bottom-4 left-4 z-20 bg-black/60 p-2 rounded-full 
                 border border-green-500/30 hover:bg-black/80 transition-all
                 group flex items-center gap-2"
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      {isPlaying ? (
        <Pause className="w-5 h-5 text-green-500" />
      ) : (
        <Play className="w-5 h-5 text-green-500" />
      )}
      <span className="text-green-500 text-sm font-mono opacity-0 max-w-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap">
        {isPlaying ? "Pause" : "Play"}
      </span>
    </button>
  );
});
