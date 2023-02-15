import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { MediaType } from "../media.type";
import { useVideoControl } from "./useVideoControl";
import { useVideoPlayButton, VideoPlayButton } from "./VideoPlayButton";

export const WatchContent = ({ url }: MediaType) => {
  const { ref, toggleVideoPlay } = useVideoControl();
  const { playBtnVisiblity, visiblePlayBtn, hidePlayBtn } =
    useVideoPlayButton();

  return (
    <Stack css={sx.root}>
      <div css={sx.videoFrame}>
        <video
          ref={ref}
          css={sx.video}
          controls
          preload="metadata"
          onPlay={hidePlayBtn}
          onPause={visiblePlayBtn}
        >
          <source src={url} type="video/mp4" />
        </video>
        <div css={sx.videoControlContainer} onClick={toggleVideoPlay}>
          {playBtnVisiblity && <VideoPlayButton />}
        </div>
      </div>
    </Stack>
  );
};

const sx = {
  root: css`
    position: relative;
    width: 744px;
    height: 754px;
    border-radius: 20px;
    overflow: hidden;
  `,
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
