import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import Image from "next/image";
import ReadContentSampleImage from "@/assets/progress/img-read-content.png";
import { MediaType } from "../media.type";

export const ReadContent = ({ url }: MediaType) => {
  const imageUrl = url.startsWith("") ? ReadContentSampleImage : url;

  return (
    <Stack css={sx.root}>
      <Image width={782} height={523} src={imageUrl} alt="img" />
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
