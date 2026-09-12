import { useEffect, useRef, type SyntheticEvent } from 'react';

interface Props {
  src: string;
  poster: string;
  width: number;
  height: number;
  /** localStorage key holding the last playback position, in seconds. */
  storageKey: string;
}

function readTime(key: string): number {
  try {
    return Number.parseFloat(localStorage.getItem(key) ?? '');
  } catch {
    return Number.NaN;
  }
}

function writeTime(key: string, seconds: number) {
  try {
    localStorage.setItem(key, String(seconds));
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); resuming is best-effort.
  }
}

/** A looping, muted video that picks up where the visitor last stopped watching. */
export default function ResumableVideo({
  src,
  poster,
  width,
  height,
  storageKey,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const saved = readTime(storageKey);
    if (!video || !Number.isFinite(saved) || saved <= 0) return;

    const resume = () => {
      if (Number.isFinite(video.duration) && saved < video.duration - 0.5) {
        video.currentTime = saved;
      }
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      resume();
      return;
    }
    video.addEventListener('loadedmetadata', resume, { once: true });
    return () => video.removeEventListener('loadedmetadata', resume);
  }, [storageKey]);

  const handleTimeUpdate = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    if (!video.paused) writeTime(storageKey, video.currentTime);
  };

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      width={width}
      height={height}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      onTimeUpdate={handleTimeUpdate}
      className="media media-video"
    />
  );
}
