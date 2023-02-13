import { css } from "@emotion/react";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import { IconButton, IconButtonProps } from "@mui/material";

export const VideoPlayButton = (p: IconButtonProps) => {
  return (
    <IconButton css={styles.iconButton} {...p}>
      <PlayArrowRounded css={styles.icon} />
    </IconButton>
  );
};

const styles = {
  iconButton: css`
    width: 130px;
    aspect-ratio: 1/1;
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0;
    transition: all ease-in-out 1s;
    animation: ani 0.25s;
    @keyframes ani {
      0% {
        transform: scale(0.7);
      }
      100% {
        transform: scale(1);
      }
    }
  `,
  icon: css`
    width: 110px;
    height: 110px;
    color: black;
  `,
};
