import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Content } from "./components";

export interface HelpPopupProps {
  isClicked: number;
  setIsClicked: Function;
}

export const NewsView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.header}>
        <Typography variant="body1" fontWeight={700} color="white">
          {"News"}
        </Typography>
      </div>
      <Content />
    </div>
  );
};

const sx = {
  header: css`
    background-color: ${Colors.BackBlue};
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  root: css`
    width: 400px;
    height: 682.18px;
    border-radius: 16px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.16);
    background-color: rgba(255,255,255,1);
  `,
};
