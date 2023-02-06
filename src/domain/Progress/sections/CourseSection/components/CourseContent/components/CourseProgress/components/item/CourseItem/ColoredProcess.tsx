import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Colors } from "@/common/themes/Color";
import Image from "next/image";
import CompletedIcon from "@/assets/progress/icon/ic-completed.svg";
import React from "react";

type ColoredProcessType = {
  processNumber: number;
};
export const ColoredProcess = ({ processNumber }: ColoredProcessType) => {
  return (
    <React.Fragment>{ColoredProcessByNumber(processNumber)}</React.Fragment>
  );
};

const ColoredProcessByNumber = (v: number) => {
  switch (v) {
    case 0:
      return (
        <div css={sx.coloredProcess("transparent")}>
          <Typography variant="caption" css={sx.text("#0A0B26")}>
            {v + "%"}
          </Typography>
        </div>
      );
    case 100:
      return (
        <div css={sx.coloredProcess(Colors.CompeleteGreen)}>
          <Image
            width={21.25}
            height={19.37}
            src={CompletedIcon}
            alt={"completed"}
          />
          <Typography variant="caption" css={sx.text("white")}>
            {v + "%"}
          </Typography>
        </div>
      );
    default:
      return (
        <div css={sx.coloredProcess(Colors.UnCompeleteYellow)}>
          <Typography variant="caption" css={sx.text("white")} ml={"5px"}>
            {v + "%"}
          </Typography>
        </div>
      );
  }
};

const sx = {
  coloredProcess: (backgroundColor: string) => css`
    width: 78px;
    height: 38px;
    border-radius: 5px;
    text-align: center;
    background-color: ${backgroundColor};

    display: flex;
    align-items: center;
    justify-content: center;
  `,
  text: (textColor: string) => css`
    color: ${textColor};
    font-weight: 500;
  `,
};
