import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import Image from "next/image";

type ImageContainerType = {
  image: any;
};
export const ImageContainer = ({ image }: ImageContainerType) => {
  return (
    <Stack css={sx.imageContainer}>
      <div css={sx.imageWrapper}>
        <Image src={image} alt="popup" css={sx.image} />
      </div>
    </Stack>
  );
};

const sx = {
  imageContainer: css`
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  imageWrapper: css`
    width: 100%;
  `,
  image: css`
    max-width: inherit;
    height: inherit;
    width: inherit;
    object-fit: cover;
  `,
};
