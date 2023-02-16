import { css } from "@emotion/react";
import Image from "next/image";
import send from "@/assets/helppopup/messages/send-ic.png";
import { Colors } from "@/common/themes/Color";
import { Typography } from "@mui/material";

type SendMessageBtnType = {
  onClick: () => void;
};
export const SendMessageBtn = ({ onClick }: SendMessageBtnType) => {
  return (
    <div css={sx.root} onClick={onClick}>
      <Image src={send} alt="send" width={15} height={15} />
      <Typography color="white" variant="caption" fontWeight={600}>
        {"Send us a message"}
      </Typography>
    </div>
  );
};

const sx = {
  root: css`
    width: 204px;
    height: 40px;
    background-color: ${Colors.ActiveBlue};
    border-radius: 100px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    justify-content: space-between;
    position: absolute;
    bottom: 105px;
    left: 98px;
    cursor: pointer;
  `,
};
