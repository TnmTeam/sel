import { Box, Modal, Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ImageContainer } from "./ImageContainer";
import { ButtonContainer } from "../components";
import { CloseButton } from "../components/CloseButton";

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
          <CloseButton onClose={onClose} />
          <Stack css={sx.content} spacing={"32px"}>
            <ImageContainer image={image} />
            <ButtonContainer saveBtnClick={() => null} />
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
};
