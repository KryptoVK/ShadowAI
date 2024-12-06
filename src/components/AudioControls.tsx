import React, { memo } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioControlsProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

export const AudioControls: React.FC<AudioControlsProps> = memo(({ isMuted, onToggleMute }) => {
  return (
    <button
      onClick={onToggleMute}
      className="absolute bottom-4 right-4 z-20 bg-black/60 p-2 rounded-full 
                 border border-green-500/30 hover:bg-black/80 transition-all
                 group flex items-center gap-2"
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 text-green-500" />
      ) : (
        <Volume2 className="w-5 h-5 text-green-500" />
      )}
      <span className="text-green-500 text-sm font-mono opacity-0 max-w-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap">
        {isMuted ? "Unmute" : "Mute"}
      </span>
    </button>
  );
});
