import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ChartProgressItem } from "./ChartProgressItem";
import { ProgressListType } from "../types/progress.type";

export const ChartProgressList = ({ list }: ProgressListType) => {
  return (
    <Stack direction={"row"} css={sx.wrapper}>
      {list.map((it, index) => (
        <ChartProgressItem
          key={index}
          progress={it.progress}
          progressDesc={it.progressDesc}
        />
      ))}
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
