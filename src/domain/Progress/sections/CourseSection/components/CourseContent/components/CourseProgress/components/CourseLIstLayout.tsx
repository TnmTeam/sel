import { Stack } from "@mui/material";
import { CourseListLayoutType } from "../../../types/course.type";
import { css } from "@emotion/react";
import { CourseItem } from "./item/CourseItem/CourseItem";

export const CourseListLayout = ({
  courses,
  onCourseClick,
}: CourseListLayoutType) => {
  return (
    <Stack css={sx.courseListLayout}>
      {courses.map((it, index) => (
        <CourseItem
          key={index}
          item={it}
          onItemClick={() => onCourseClick(it)}
        />
      ))}
    </Stack>
  );
};

const sx = {
  courseListLayout: css`
    width: 100%;
    height: 664px;
  `,
};
