import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { SelectedCourseLayoutType } from "../../../types/course.type";
import { DetailCourseItem } from "./item/CourseDetailItem/CourseDetailItem";
import { CourseItem } from "./item/CourseItem/CourseItem";

export const SelectedCourseLayout = ({
  detailCourses,
  selectedCourse,
  selectedDetailCourse,
  onListBack,
  onCourseClick,
}: SelectedCourseLayoutType) => {
  return (
    <Stack css={sx.courseListLayout}>
      <CourseItem item={selectedCourse} onItemClick={onListBack} isSelected />
      <div css={sx.container}>
        {detailCourses &&
          detailCourses.map((it, index) => (
            <DetailCourseItem
              key={index}
              item={it}
              isSelected={index == selectedDetailCourse?.id}
              onItemClick={() => onCourseClick(it)}
            />
          ))}
      </div>
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
  container: css`
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
