import * as React from "react";
import { css } from "@emotion/react";
import { MainView } from "./views/MainView/MainView";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popper from "@mui/material/Popper";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

export const HelpPopup = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Stack>            
      <Avatar aria-describedby={id} onClick={handleClick} css={sx.popup}>
        <ModeCommentIcon fontSize="large" />
      </Avatar>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="top-end">
        <div css={sx.comingSoon}>Coming Soon</div>
        <MainView />
      </Popper>
    </Stack>
  );
};

const sx = {
  popup: css`
    position: fixed;
    bottom: 50px;
    width: 60px;
    height: 60px;
    right: 280px;
    z-index: 99;
    background: #4a7199;
    max-width: 1440px;
    margin: 0 auto;
    border: 1px solid;
  `,
    comingSoon: css`
        background: rgba(0, 0, 0, 0.7);
        font-size: 50px;
        color: white;
        position: absolute;
        width: 400px;
        line-height: 600px;
        text-align: center;
        border-radius: 10px;
        z-index: 999;
    `,
};
