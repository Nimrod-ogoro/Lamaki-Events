// src/components/LazyVideo.tsx
import React, { useRef, useEffect, useState } from "react";

interface LazyVideoProps {
  src: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      style={{ width: "100%", height: 240, objectFit: "cover" }}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
    />
  );
};

export default LazyVideo;



