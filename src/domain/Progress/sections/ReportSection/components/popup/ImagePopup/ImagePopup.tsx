import { Box, Button, IconButton, Modal, Stack } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
import cross from "@/assets/progress/report/cross.png";

type ImagePopupType = {
  open: boolean;
  onClose: () => void;
  image: any | null;
};

export const ImagePopup = ({ open, onClose, image }: ImagePopupType) => {
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
            <div css={sx.childrenWrap}>
              <div css={sx.imageWrapper}>
                <Image src={image} alt="popup" css={sx.image} />
              </div>
            </div>
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
  imageWrapper: css`
    width: 100%;
  `,
  image: css`
    max-width: inherit;
    height: inherit;
    width: inherit;
    object-fit: cover;
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
