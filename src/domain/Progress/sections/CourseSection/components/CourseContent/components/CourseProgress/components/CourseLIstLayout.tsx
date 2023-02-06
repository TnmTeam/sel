import { Stack } from "@mui/material";
import { CourseType } from "../../../types/course.type";
import { css } from "@emotion/react";
import { CourseItem } from "./item/CourseItem/CourseItem";

type CourseListLayoutProps = {
  courses: CourseType[];
  onCourseClick: (v: CourseType) => void;
};

export const CourseListLayout = ({
  courses,
  onCourseClick,
}: CourseListLayoutProps) => {
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
