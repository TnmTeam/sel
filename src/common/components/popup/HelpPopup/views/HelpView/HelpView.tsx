import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { BottomBar } from "../../components";
import { Content, SearchBar } from "./components";

export interface HelpPopupProps {
  isClicked: number;
  setIsClicked: Function;
}

export const HelpView = ({isClicked, setIsClicked}: HelpPopupProps) => {
  return (
    <div css={sx.root}>
      <div css={sx.header}>
        <Typography
          variant="body1"
          color="white"
          fontWeight={700}
          lineHeight={1}
        >
          {"Help"}
        </Typography>
        <SearchBar />
      </div>
      <Content />
      <BottomBar isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

const sx = {
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
  header: css`
    background: ${Colors.BackBlue};
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 22px 0 11px 0;
  `,
};
