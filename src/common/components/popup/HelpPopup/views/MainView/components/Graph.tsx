import { css } from "@emotion/react";
import { Stack } from "@mui/material";

export const Graph = () => {
  return (
    <Stack css={sx.root}>
      <div></div>
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 193px;
    background: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06),
      0px 0px 0px 1px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
  `,
};
