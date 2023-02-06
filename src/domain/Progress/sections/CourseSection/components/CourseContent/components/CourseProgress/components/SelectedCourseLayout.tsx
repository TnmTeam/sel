import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { SelectedCourseLayoutType } from "../../../types/course.type";
import { DetailCourseItem } from "./item/CourseDetailItem/CourseDetailItem";
import { CourseItem } from "./item/CourseItem/CourseItem";

export const SelectedCourseLayout = ({
  selectedCourse,
  selectedDetailCourse,
  onListBack,
  onCourseClick,
}: SelectedCourseLayoutType) => {
  return (
    <Stack css={sx.courseListLayout}>
      <CourseItem item={selectedCourse} onItemClick={onListBack} isSelected />
      {selectedCourse.courseDetailList.map((it, index) => (
        <DetailCourseItem
          key={index}
          item={it}
          isSelected={it == selectedDetailCourse}
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
    display: flex;
    flex-direction: column;
  `,
};
