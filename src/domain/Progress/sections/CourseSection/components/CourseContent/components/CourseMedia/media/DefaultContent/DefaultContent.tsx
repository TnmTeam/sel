import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";

export const DefaultContent = () => {
  return (
    <Stack css={sx.root}>
                <div css={sx.videoFrame(true)}>
                    <div
                        css={sx.videoControlContainer(true)}
                    >
                    </div>
                    <video
                        css={sx.video(true)}
                        controls={true}
                        preload='auto'
                    >
                        <source src={'assets/videos/video-intro.mov'} type='video/mp4' />
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
      z-index: ${isPlaying ? '1' : '0'};
  `,
  video: (isType: boolean) => css`
      width: 100%;
      height: 100%;
      ${isType ? '' : 'height: 100%'}; /* mp4 only */
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
      z-index: ${isPlaying ? '0' : '1'};
  `,
  noUrlContentRoot: css`
      width: 100%;
      height: 740px;
      display: flex;
      overflow: auto;
      align-items: center;
      padding-top: 100px;
  `,
  noUrlContentContainer: css`
      position: relative;
      width: 556px;
      height: 483px;
  `,
};