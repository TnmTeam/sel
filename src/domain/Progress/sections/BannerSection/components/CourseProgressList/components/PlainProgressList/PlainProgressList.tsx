import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ProgressItem } from "./ProgressItem";
import { ProgressListType } from "../types/progress.type";

export const PlainProgressList = ({ list }: ProgressListType) => {
  return (
    <Stack direction={"row"} css={sx.wrapper}>
      {list.map((it, index) => (
        <ProgressItem
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
