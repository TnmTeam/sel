import { css } from "@emotion/react";
import Image from "next/image";
import logo from "@/assets/helppopup/main/logo.png";
import { BottomBar } from "../../components";
import { PieChart, SearchForHelp, SendMessage } from "./components";
import { Typography } from "@mui/material";

export interface HelpPopupProps {
    setCurrentView: Function;
}

export const MainView = ({setCurrentView}: HelpPopupProps) => {
  return (
    <div css={sx.root}>
      <div css={sx.blueBg}></div>
      <div css={sx.inner}>
        <Image src={logo} alt="logo" width={32} height={32} />
        <div css={sx.titleWrap}>
          <Typography
            variant="h4"
            fontSize={"32px"}
            color="white"
            sx={{ opacity: "0.7" }}
          >
            {"Hello there"}
          </Typography>
          <Typography variant="h4" fontSize={"32px"} color="white">
            {"How can we help?"}
          </Typography>
        </div>
        <SendMessage />
        <SearchForHelp />
        <PieChart />
      </div>
      <BottomBar setCurrentView={setCurrentView} />
    </div>
  );
};

const sx = {
  root: css`
    width: 400px;
    height: 682.18px;
    border-radius: 16px;
    position: relative;
    padding: 28px 16px;
    overflow: hidden;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.16);
  `,
  titleWrap: css`
    margin-top: 76px;
    margin-bottom: 16px;
  `,
  inner: css`
    padding-bottom: 20px;
    height: 100%;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  blueBg: css`
    width: 100%;
    height: 388px;
    background: linear-gradient(
      117.67deg,
      #3f6193 0%,
      #5b8dd7 50%,
      #cbddf0 100%
    );
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 388px;
    background: linear-gradient(
      117.67deg,
      #3f6193 0%,
      #5b8dd7 50%,
      #cbddf0 100%
    );
    position: absolute;
    left: 0;
    top: 0;
  `,
};
