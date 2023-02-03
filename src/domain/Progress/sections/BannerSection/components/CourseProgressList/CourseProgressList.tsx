import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { ChartProgressList, PlainProgressList } from "./components";

export const CourseProgressList = () => {
  const models = {
    plain: [
      { progress: 27, progressDesc: "Hours Spent" },
      { progress: 1456, progressDesc: "Words Written" },
      { progress: 4, progressDesc: "Videos Uploaded" },
      { progress: 95, progressDesc: "Attendance" },
    ],
    chart: [
      { progress: 3, progressDesc: "Self-Control" },
      { progress: 4, progressDesc: "Purpose" },
      { progress: 3, progressDesc: "Gratitude" },
      { progress: 3, progressDesc: "Grit" },
    ],
  };

  return (
    <Stack css={sx.courseProgressListContainer}>
      <PlainProgressList list={models.plain} />
      <ChartProgressList list={models.chart} />
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
