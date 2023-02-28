import { RateType } from "@/domain/Progress/types/banner.type";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { ChartProgressList, PlainProgressList } from "./components";

type CourseProgressListDataType = {
  models: RateType;
};

export const CourseProgressList = ({ models }: CourseProgressListDataType) => {
  return (    
    <Stack css={sx.courseProgressListContainer_phase1}>  { /* TO DO : Phase 1. */ }
      <PlainProgressList
        attendance={models.plain.attendance}
        hoursSpent={models.plain.hoursSpent}
        videosUploaded={models.plain.videosUploaded}
        wordsWritten={models.plain.wordsWritten}
      />      
      {/*
                // TO DO: Phase 1. demo hide
      <ChartProgressList
        selfControl={1}
        purpose={2}
        gratitude={3}
        grit={4}
      />    
  */}
    </Stack>
  );
};

const sx = {
  courseProgressListContainer_phase1: css`
    width: 100%;
    height: 230px; 
    padding: 0 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
  `,
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
