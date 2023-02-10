import { Box, Button, IconButton, Modal, Stack } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
import cross from "@/assets/progress/report/cross.png";
import { useVideoControl } from "./useVideoControl";
import { useVideoPlayButton, VideoPlayButton } from "./VideoPlayButton";

type ImagePopupType = {
  open: boolean;
  onClose: () => void;
  videoSrc: string;
};

export const VideoPopup = ({ open, onClose, videoSrc }: ImagePopupType) => {
  const { ref, toggleVideoPlay } = useVideoControl();
  const { playBtnVisiblity, visiblePlayBtn, hidePlayBtn } =
    useVideoPlayButton();

  return (
    <Modal
      css={sx.modal}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box css={sx.box}>
        <div css={sx.container}>
          <IconButton onClick={onClose} css={sx.closeBtn}>
            <Image src={cross} alt="exit" width={14} height={14} />
          </IconButton>
          <Stack css={sx.content} spacing={"32px"}>
            <Stack css={sx.wrapper}>
              <div css={sx.videoFrame}>
                <video
                  ref={ref}
                  css={sx.video}
                  preload="metadata"
                  onPlay={hidePlayBtn}
                  onPause={visiblePlayBtn}
                >
                  <source
                    src="assets/videos/video-sample.mp4"
                    type="video/mp4"
                  />
                </video>
                <div css={sx.videoControlContainer} onClick={toggleVideoPlay}>
                  {playBtnVisiblity && <VideoPlayButton />}
                </div>
              </div>
            </Stack>
            <div css={sx.btnsWrap}>
              <Button onClick={() => null} css={sx.saveBtn}>
                {"Save"}
              </Button>
              <Button onClick={() => null} css={sx.shareBtn}>
                {"Share"}
              </Button>
            </div>
          </Stack>
        </div>
      </Box>
    </Modal>
  );
};

const sx = {
  modal: css`
    width: 100%;
    height: 100%;
  `,
  box: css`
    width: 1056px;
    height: 773px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid black;
    box-shadow: 24;
  `,
  container: css`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 60px;
    background-color: white;
  `,
  content: css`
    width: 100%;
    height: 100%;
  `,

  wrapper: css`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
  `,
  closeBtn: css`
    position: absolute;
    top: 16px;
    right: 16px;
  `,
  childrenWrap: css`
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
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
    mask-image: url("assets/videos/img-video-sample.png");
    mask-size: cover;
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
  btnsWrap: css`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    gap: 26px;
  `,
  saveBtn: css`
    color: rgba(103, 135, 183, 1);
    background-color: white;
    border: solid 1px rgba(103, 135, 183, 1);
    border-radius: 8px;
    width: 125px;
    height: 52px;
    text-transform: none;
    cursor: pointer;
    &:hover {
      background-color: white;
    }
  `,
  shareBtn: css`
    background-color: rgba(98, 147, 198, 1);
    border-radius: 8px;
    color: white;
    width: 125px;
    height: 52px;
    border: none;
    text-transform: none;
    cursor: pointer;
    &:hover {
      background-color: rgba(98, 147, 198, 1);
    }
  `,
};
