import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useState } from "react";
import { CourseType } from "../../course.type";
import { CourseListLayout } from "./components/CourseLIstLayout";
import { SelectedCourseLayout } from "./components/SelectedCourseLayout";
import { courseModel } from "../../course.models";

export const CourseProgress = () => {
  const courses = courseModel;
  const [course, setCourse] = useState<CourseType | null>(null);
  return (
    <Stack css={sx.progressContainer}>
      <CourseProgressTitle />
      <div>
        {!course ? (
          <CourseListLayout courses={courses} onCourseClick={() => null} />
        ) : (
          <SelectedCourseLayout selectedCourse={course} />
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
