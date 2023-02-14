import { useRef } from "react";

export const useVideoControl = () => {
  const ref = useRef<HTMLVideoElement>(null);

  const getVideoElement = () => ref && ref.current;
  const playVideo = () => getVideoElement()?.play();
  const pauseVideo = () => getVideoElement()?.pause();
  const toggleVideoPlay = () =>
    getVideoElement()?.paused ? playVideo() : pauseVideo();

  return {
    ref,
    getVideoElement,
    playVideo,
    pauseVideo,
    toggleVideoPlay,
  };
};
