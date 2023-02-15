import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { CourseMedia } from "./components/CourseMedia/CourseMedia";
import { CourseProgress } from "./components/CourseProgress/CourseProgress";
import { useCourseContent } from "./useCourseContent";
import { CourseType } from "@/domain/Progress/types/course.type";

type CourseContentType = {
  models: CourseType[];
};

export const CourseContent = ({ models }: CourseContentType) => {
  const { courseState, detailCourseState, onListBack } =
    useCourseContent(models);

  return (
    <Stack direction={"row"} css={sx.root}>
      <CourseProgress
        courseState={courseState}
        detailCourseState={detailCourseState}
        onListBack={onListBack}
      />
      <CourseMedia selectedDetailCourse={detailCourseState.course} />
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: white;
    padding: 26px 40px;
    border-radius: 20px;
    display: flex;
    gap: 21px;
  `,
};
