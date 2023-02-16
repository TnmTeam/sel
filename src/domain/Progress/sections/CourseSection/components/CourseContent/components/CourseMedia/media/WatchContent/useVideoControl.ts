import { useRef } from "react";

export const useVideoControl = () => {
  const ref = useRef<HTMLVideoElement>(null);

  const getVideoElement = () => ref && ref.current;
  const playVideo = () => getVideoElement()?.play();
  const toggleVideoPlay = () => getVideoElement()?.paused && playVideo();

  return {
    ref,
    getVideoElement,
    playVideo,
    toggleVideoPlay,
  };
};
