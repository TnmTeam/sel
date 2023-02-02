import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { ChartType } from "./types/chart.type";

export const RateDescription = ({ rate }: ChartType) => {
  return (
    <Stack css={sx.rateTextContainer}>
      <Stack css={sx.rateTextWrapper}>
        <Typography
          fontSize="100px"
          fontWeight={700}
          color="white"
          letterSpacing={"-1.75px"}
        >
          {rate}
        </Typography>
        <Typography
          variant="h2"
          lineHeight={1}
          color="white"
          letterSpacing="-1.75px"
          css={sx.percent}
        >
          {"%"}
        </Typography>
      </Stack>
      <Typography
        variant="h5"
        lineHeight={1.2}
        fontWeight={700}
        color="white"
        letterSpacing={"1.5px"}
        textAlign={"center"}
      >
        {"Course Completion"}
      </Typography>
    </Stack>
  );
};

const sx = {
  rateTextContainer: css`
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 40px;
  `,
  rateTextWrapper: css`
    position: relative;
    text-align: center;
  `,
  percent: css`
    position: absolute;
    top: -40px;
    right: -20px;
  `,
};
