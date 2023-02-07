import { css } from "@emotion/react";
import { MainView } from "./views/MainView/MainView";

export const HelpPopup = () => {
  return (
    <div css={sx.popup}>
      <MainView />
    </div>
  );
};

const sx = {
  popup: css`
    position: relative;
    z-index: 99;
  `,
};
