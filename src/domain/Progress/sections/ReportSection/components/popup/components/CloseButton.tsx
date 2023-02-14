import { css } from "@emotion/react";
import { IconButton } from "@mui/material";
import Image from "next/image";
import CloseImage from "@/assets/progress/report/cross.png";

type CloseButtonType = {
  onClose: () => void;
};

export const CloseButton = ({ onClose }: CloseButtonType) => {
  return (
    <IconButton onClick={onClose} css={sx.closeBtn}>
      <Image src={CloseImage} alt="exit" width={14} height={14} />
    </IconButton>
  );
};

const sx = {
  closeBtn: css`
    position: absolute;
    top: 16px;
    right: 16px;
  `,
};
