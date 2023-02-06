import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import Image from "next/image";
import ReadContentSampleImage from "@/assets/progress/img-read-content.png";

export const ReadContent = () => {
  return (
    <Stack css={sx.root}>
      <Image width={782} height={523} src={ReadContentSampleImage} alt="img" />
    </Stack>
  );
};

const sx = {
  root: css`
    width: 744px;
    height: 754px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
