import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { numberWithComma } from "@/utils/format/NumberFormat";
import { ProgressItemType } from "../types/progress.type";

export const ProgressItem = ({ progress, progressDesc }: ProgressItemType) => {
  return (
    <Stack css={sx.item}>
      <Typography
        className="progress"
        variant="h1"
        color="#253858"
        letterSpacing={"-1.75px"}
        mb="12px"
      >
        {numberWithComma(progress)}
      </Typography>
      <Typography variant="subtitle1" color="#253858" letterSpacing={"0.2px"}>  {/* letterSpacing 1.5px */}
        {progressDesc}
      </Typography>
    </Stack>
  );
};

const sx = {
  item: css`
    width: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;

    /*
    &:nth-of-type(4) {
      .progress::after {
        content: "%";
      }
    }
    */
  `,
};
