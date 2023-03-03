import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { CourseMedia } from "./components/CourseMedia/CourseMedia";
import { CourseProgress } from "./components/CourseProgress/CourseProgress";
import { useCourseContent } from "./useCourseContent";
import { CourseType } from "@/domain/Progress/types/course.type";
import { useRecoilValue } from 'recoil';
import { focusInfo } from "@/common/atom/Atom";

type CourseContentType = {
  models: CourseType[];
};

export const CourseContent = ({ models }: CourseContentType) => {
  const { courseState, detailCourseState, onListBack } =
    useCourseContent(models);

  const focusInfoMap:any  = useRecoilValue(focusInfo);
  const focusComponents   = focusInfoMap?.focusComponents ?? '';
  
  // Component포커스이동
  if(focusComponents){
    location.href='#'+focusComponents;
  }

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
    gap: 20px;
  `,
};
