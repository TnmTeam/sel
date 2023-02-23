import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { MediaType } from "../media.type";
import { useVideoControl } from "./useVideoControl";
import { useVideoPlayButton, VideoPlayButton } from "./VideoPlayButton";

export const WatchContent = ({ url }: MediaType) => {
  //console.log("WatchContent url : "+url);
  const { ref, toggleVideoPlay } = useVideoControl();
  const { playBtnVisiblity, hidePlayBtn } = useVideoPlayButton();

  return (
    <Stack css={sx.root}>
      <div css={sx.videoFrame(!playBtnVisiblity)}>
        <div
          css={sx.videoControlContainer(!playBtnVisiblity)}
          onClick={toggleVideoPlay}
        >
          {playBtnVisiblity && <VideoPlayButton />}
        </div>
        <video
          ref={ref}
          css={sx.video}
          controls={!playBtnVisiblity}
          preload="auto"
          onPlay={hidePlayBtn}
        >
          <source src={url} type="video/mp4" />
        </video>
      </div>
    </Stack>
  );
};

const sx = {
  root: css`
    position: relative;
    width: 100%;
    height: 754px;
    border-radius: 20px;
    overflow: hidden;
  `,
  videoFrame: (isPlaying: boolean) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: ${isPlaying ? "1" : "0"};
  `,
  video: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  videoControlContainer: (isPlaying: boolean) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${isPlaying ? "0" : "1"};
  `,
};
