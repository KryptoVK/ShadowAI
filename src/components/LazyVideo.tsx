import React, { Suspense, lazy, memo } from 'react';
import { Loader2 } from 'lucide-react';

const VideoBackground = lazy(() => import('./VideoBackground'));

const LazyVideo: React.FC = () => {
  return (
    <Suspense fallback={
      <div className="h-full flex items-center justify-center bg-black/50">
        <Loader2 className="w-8 h-8 text-green-500 animate-spin" />
      </div>
    }>
      <VideoBackground />
    </Suspense>
  );
};

export default memo(LazyVideo);
