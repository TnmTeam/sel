import { css } from "@emotion/react";
import { useVideoControl } from "./useVideoControl";
import { useVideoPlayButton, VideoPlayButton } from "./VideoPlayButton";

type VideoContainerType = { video: string };

export const VideoContainer = ({ video }: VideoContainerType) => {
  const { ref, toggleVideoPlay } = useVideoControl();
  const { playBtnVisiblity, visiblePlayBtn, hidePlayBtn } =
    useVideoPlayButton();

  return (
    <div css={sx.videoFrame}>
      <video
        ref={ref}
        css={sx.video}
        preload="metadata"
        onPlay={hidePlayBtn}
        onPause={visiblePlayBtn}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div css={sx.videoControlContainer} onClick={toggleVideoPlay}>
        {playBtnVisiblity && <VideoPlayButton />}
      </div>
    </div>
  );
};

const sx = {
  videoFrame: css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  video: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  videoControlContainer: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  `,
};
