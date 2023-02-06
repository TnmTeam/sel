import { useState } from "react";

export const useVideoPlayButton = () => {
  const [playBtnVisiblity, setPlayBtnVisiblity] = useState(true);
  const visiblePlayBtn = () => setPlayBtnVisiblity(true);
  const hidePlayBtn = () => setPlayBtnVisiblity(false);

  return {
    playBtnVisiblity,
    visiblePlayBtn,
    hidePlayBtn,
  };
};
