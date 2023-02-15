import { css } from "@emotion/react";
import { BottomBar } from "../../components";
import { HomeView } from "../HomeView/HomeView";
import { MessagesView } from "../MessageView/MessagesView";
import { HelpView } from "../HelpView/HelpView";
import { NewsView } from "../NewsView/NewsView";
import { useState } from "react";

export const MainView = () => {
  const [viewIndex, SetViewIndex] = useState(0);
  const onClick = (index: number) => {
    SetViewIndex(index);
  };
  const getViewByIndex = (index?: number) => {
    switch (index) {
      case 0:
        return (
          <HomeView
            onMessageTab={() => onClick(1)}
            onHelpTab={() => onClick(2)}
          />
        );
      case 1:
        return <MessagesView />;
      case 2:
        return <HelpView />;
      case 3:
        return <NewsView />;
    }
  };

  return (
    <div css={sx.root}>
      {getViewByIndex(viewIndex)}
      <BottomBar viewIndex={viewIndex} onClick={onClick} />
    </div>
  );
};

const sx = {
  root: css`
    width: 400px;
    height: 682.18px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.16);
    background-color: white;
    z-index: 99;
  `,
};
