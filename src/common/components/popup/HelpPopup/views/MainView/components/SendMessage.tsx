import { css } from "@emotion/react";
import Image from "next/image";
import send from "@/assets/helppopup/main/send-ic.png";
import { Typography } from "@mui/material";
export const SendMessage = () => {
  return (
    <div css={sx.root}>
      <div>
        <Typography variant="caption" fontWeight={600} color="black">
          {"Send us a message"}
        </Typography>
        <Typography variant="caption" color="#737373">
          {"We typically reply within a day"}
        </Typography>
      </div>
      <Image src={send} alt="send" width={13} height={14} />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 74px;
    border-radius: 10px;
    background-color: white;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06),
      0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  `,
};
