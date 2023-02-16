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
  const isNumberTextBlack = processNumber < 20 ? true : false;
  return (
    <React.Fragment>
      <div css={sx.coloredProcess(getColorByNumber(processNumber))}>
        {processNumber == 100 && (
          <Image
            width={21.25}
            height={19.37}
            src={CompletedIcon}
            alt={"completed"}
          />
        )}
        <Typography variant="caption" css={sx.text(isNumberTextBlack)}>
          {processNumber + "%"}
        </Typography>
      </div>
    </React.Fragment>
  );
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
  text: (isBlack: boolean) => css`
    color: ${isBlack ? "#0A0B26" : "white"};
    font-weight: 500;
    margin-left: 4px;
  `,
};

const getColorByNumber = (v: number) => {
  switch (true) {
    case v < 20:
      return "transparent";
    case v < 40:
      return Colors.LateRed;
    case v <= 60:
      return Colors.MiddleCompeleteYellow;
    case v <= 80:
      return Colors.ActiveBlue;
    case v <= 100:
      return Colors.CompeleteGreen;
    default:
      return "transparent";
  }
};
