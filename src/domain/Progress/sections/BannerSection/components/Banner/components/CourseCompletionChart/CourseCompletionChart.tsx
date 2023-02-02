import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { ChartType } from "./types/chart.type";
import { HalfPieChart } from "./HalfPieChart";
import { RateDescription } from "./RateDescription";

export const CourseCompletionChart = ({ rate }: ChartType) => {
  return (
    <Stack css={sx.chart}>
      <Stack css={sx.chartWrapper}>
        <HalfPieChart rate={rate} />
        <RateDescription rate={rate} />
      </Stack>
    </Stack>
  );
};

const sx = {
  chart: css`
    width: 324px;
    position: absolute;
    top: 90px;
    right: 200px;
  `,
  chartWrapper: css`
    width: 100%;
    position: relative;
  `,
};
