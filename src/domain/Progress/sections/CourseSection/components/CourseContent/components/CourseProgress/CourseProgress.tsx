import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { CourseProgressType } from "../../types/course.type";
import { CourseListLayout } from "./components/CourseLIstLayout";
import { SelectedCourseLayout } from "./components/SelectedCourseLayout";

export const CourseProgress = ({
  courseState,
  detailCourseState,
  onListBack,
}: CourseProgressType) => {
  return (
    <Stack css={sx.progressContainer}>
      <CourseProgressTitle />
      <div>
        {!courseState.course ? (
          <CourseListLayout
            courses={courseState.courses}
            onCourseClick={courseState.onCourseClick}
          />
        ) : (
          <SelectedCourseLayout
            selectedCourse={courseState.course}
            selectedDetailCourse={detailCourseState.course}
            onListBack={onListBack}
            onCourseClick={detailCourseState.onCourseClick}
          />
        )}
      </div>
    </Stack>
  );
};

const sx = {
  progressContainer: css`
    width: 464px;
  `,
};

const CourseProgressTitle = () => (
  <Typography
    fontSize="24px"
    lineHeight="31px"
    letterSpacing="0.02em"
    fontWeight={700}
    color="#0A0B26"
    mb="31px"
  >
    {"Course Progress"}
  </Typography>
);
