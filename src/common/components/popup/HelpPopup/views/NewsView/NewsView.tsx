import { css } from "@emotion/react";
import { BottomBar } from "../../components";
import { Content } from "./components";

export interface HelpPopupProps {
    setCurrentView: Function;
}

export const NewsView = ({setCurrentView}: HelpPopupProps) => {
  return (
    <div css={sx.root}>
      <div css={sx.header}>News</div>
      <Content />
      <BottomBar setCurrentView={setCurrentView} />
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
  `,
};
