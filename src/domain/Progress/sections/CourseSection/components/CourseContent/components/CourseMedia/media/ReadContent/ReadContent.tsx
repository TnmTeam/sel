import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import Image from "next/image";
import ReadContentSampleImage from "@/assets/progress/img-read-content.png";
import { MediaType } from "../media.type";

export const ReadContent = ({ url }: MediaType) => {
  const imageUrl = url.startsWith("") ? ReadContentSampleImage : url;

  return (
    <Stack css={sx.root}>
      <div css={sx.image}>
        <Image fill src={imageUrl} alt="img" />
      </div>
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 754px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  image: css`
    position: relative;
    width: 100%;
    height: 523px;
  `,
};
