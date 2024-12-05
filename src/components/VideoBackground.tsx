import React, { useState, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import { AudioControls } from './AudioControls';
import { VideoControls } from './VideoControls';

export function VideoBackground() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLoadedData = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative bg-black/50 h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-green-500 animate-spin" />
        </div>
      )}
      
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center text-green-500">
          Failed to load video. Please refresh the page.
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            loop
            muted={false}
            playsInline
            onLoadedData={handleLoadedData}
            onError={handleError}
            className="w-full h-full object-cover"
          >
            <source
              src="/VKrypto.mp4"
              type="video/mp4"
            />
            <source
              src="/VKrypto.mp4"
              type="video/webm"
            />
          </video>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
          <VideoControls isPlaying={isPlaying} onTogglePlay={handleTogglePlay} />
          <AudioControls isMuted={isMuted} onToggleMute={handleToggleMute} />
        </>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
    </div>
  );
}