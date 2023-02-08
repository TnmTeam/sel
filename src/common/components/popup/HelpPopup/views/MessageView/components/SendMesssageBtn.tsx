import { css } from "@emotion/react";
import Image from "next/image";
import send from "@/assets/helppopup/messages/send-ic.png";
import { Colors } from "@/common/themes/Color";
export const SendMessageBtn = () => {
  return (
    <div css={sx.root}>
      <Image src={send} alt="send" width={15} height={15} />
      <p>Send us a message</p>
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
    color: #fff;
    font-weight: 600;
    position: absolute;
    bottom: 105px;
    left: 98px;
    font-size: 14px;
  `,
};
