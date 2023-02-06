import { CourseDetailType, CourseType } from "../../../types/course.type";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { DetailCourseItem } from "./item/CourseDetailItem/CourseDetailItem";
import { CourseItem } from "./item/CourseItem/CourseItem";

type SelectedCourseLayoutProps = {
  selectedCourse: CourseType;
  selectedDetailCourse: CourseDetailType | null;
  onListBack: () => void;
  onCourseClick: (detailCourse: CourseDetailType) => void;
};

export const SelectedCourseLayout = ({
  selectedCourse,
  onListBack,
  onCourseClick,
}: SelectedCourseLayoutProps) => {
  return (
    <Stack css={sx.courseListLayout}>
      <CourseItem item={selectedCourse} onItemClick={onListBack} isSelected />
      {selectedCourse.courseDetailList.map((it, index) => (
        <DetailCourseItem
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
    display: flex;
    flex-direction: column;
  `,
};
