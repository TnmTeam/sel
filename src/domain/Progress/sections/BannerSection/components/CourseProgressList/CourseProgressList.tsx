import { RateType } from "@/domain/Progress/types/banner.type";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { ChartProgressList, PlainProgressList } from "./components";

type CourseProgressListDataType = {
  models: RateType;
};

export const CourseProgressList = ({ models }: CourseProgressListDataType) => {
  return (
    <Stack css={sx.courseProgressListContainer}>
      <PlainProgressList
        attendance={models.plain.attendance}
        hoursSpent={models.plain.hoursSpent}
        videosUploaded={models.plain.videosUploaded}
        wordsWritten={models.plain.wordsWritten}
      />
      <ChartProgressList
        selfControl={models.chart.selfControl}
        purpose={models.chart.purpose}
        gratitude={models.chart.gratitude}
        grit={models.chart.grit}
      />
    </Stack>
  );
};

const sx = {
  courseProgressListContainer: css`
    width: 100%;
    height: 430px;
    padding: 0 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
  `,
};
