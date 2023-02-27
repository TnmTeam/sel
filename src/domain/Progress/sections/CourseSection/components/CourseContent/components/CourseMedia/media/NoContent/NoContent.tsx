import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";


export const NoContent = () => {
  return (
    <Stack css={sx.noContent}>
        no content
    </Stack>
  );
};

const sx = {
  noContent: css`
    font-family: DM Sans;
    font-size: 30px;
    font-weight: 700;
    color: #4F5B70;
    letter-spacing: 0.02em;
    text-align: center;
    padding-top: 50%;
  `
};
