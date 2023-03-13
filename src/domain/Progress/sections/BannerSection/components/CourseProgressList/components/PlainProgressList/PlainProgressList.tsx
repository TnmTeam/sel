import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ProgressItem } from "./ProgressItem";
import { PlainRateType } from "@/domain/Progress/types/banner.type";

export const PlainProgressList = ({
  attendance,
  hoursSpent,
  videosUploaded,
  wordsWritten,
}: PlainRateType) => {
  return (
    <Stack direction={"row"} css={sx.wrapper}>
      <ProgressItem progress={ +hoursSpent.toFixed() } progressDesc={"Minutes Impacting"} />        {/* Number(hoursSpent.toFixed()) */}
      <ProgressItem progress={wordsWritten} progressDesc={"Words Written"} />
      <ProgressItem
        progress={videosUploaded}
        progressDesc={"Videos Uploaded"}
      />
      <ProgressItem progress={attendance} progressDesc={"Activities Completed"} />
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
