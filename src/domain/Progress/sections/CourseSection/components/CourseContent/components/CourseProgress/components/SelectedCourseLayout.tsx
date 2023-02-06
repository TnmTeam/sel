import { CourseType } from "../../../types/course.type";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { DetailCourseItem } from "./item/CourseDetailItem/CourseDetailItem";
import { CourseItem } from "./item/CourseItem/CourseItem";

type SelectedCourseLayoutProps = {
  selectedCourse: CourseType;
  onCourseClick: () => void;
};

export const SelectedCourseLayout = ({
  selectedCourse,
  onCourseClick,
}: SelectedCourseLayoutProps) => {
  return (
    <Stack css={sx.courseListLayout}>
      <CourseItem
        item={selectedCourse}
        onItemClick={onCourseClick}
        isSelected
      />
      {selectedCourse.courseDetailList.map((it, index) => (
        <DetailCourseItem key={index} item={it} onItemClick={onCourseClick} />
      ))}
    </Stack>
  );
};

const sx = {
  courseListLayout: css`
    width: 100%;
    height: 664px;
    display: flex;
    flex-direction: column;
  `,
};
