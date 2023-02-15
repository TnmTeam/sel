import { css } from "@emotion/react";
import { BottomBar } from "../../components";
import { Content } from "./components";

export interface HelpPopupProps {
  isClicked: number;
  setIsClicked: Function;
}

export const NewsView = ({isClicked, setIsClicked}: HelpPopupProps) => {
  return (
    <div css={sx.root}>
      <div css={sx.header}>News</div>
      <Content />
      <BottomBar isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

const sx = {
  header: css`
    background: #6787b7;
    color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
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
