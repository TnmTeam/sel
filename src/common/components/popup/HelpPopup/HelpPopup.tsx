import { css } from "@emotion/react";
import { HelpView } from "./views/HelpView/HelpView";
import { MainView } from "./views/MainView/MainView";
import { MessagesView } from "./views/MessageView/MessagesView";
import { NewsView } from "./views/NewsView/NewsView";

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
