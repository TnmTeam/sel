import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ChartProgressItem } from "./ChartProgressItem";
import { ChartRateType } from "@/domain/Progress/types/banner.type";

export const ChartProgressList = ({
  selfControl,
  purpose,
  gratitude,
  grit,
}: ChartRateType) => {
  return (
    <Stack direction={"row"} css={sx.wrapper}>
      <ChartProgressItem progress={selfControl} progressDesc={"Self-Control"} />
      <ChartProgressItem progress={purpose} progressDesc={"Purpose"} />
      <ChartProgressItem progress={gratitude} progressDesc={"Gratitude"} />
      <ChartProgressItem progress={grit} progressDesc={"grit"} />
    </Stack>
  );
};

const sx = {
  wrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};
