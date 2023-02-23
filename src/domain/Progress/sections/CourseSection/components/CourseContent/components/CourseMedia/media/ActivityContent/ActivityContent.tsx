import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { AnswerItem } from "./AnswerItem";
import { ContentItem1, DetailCourseType } from "@/domain/Progress/types/course.type";
import { useGetUnitItemContent1 } from "@/data/api/progress/useProgressApiHooks";

type CourseMediaType = {
  selectedDetailCourse: DetailCourseType | null;
};


export const ActivityContent = ({ selectedDetailCourse }: CourseMediaType) => {
  var studentId     = '';
  var courseId      = '';
  var unitIds       = '';

  if(selectedDetailCourse) {
    studentId     = selectedDetailCourse.studentId;
    courseId      = selectedDetailCourse.courseId;
    unitIds       = selectedDetailCourse.unitId;
  }

  var data1 = useGetUnitItemContent1(studentId, courseId, unitIds);
  var models = data1.data;
  //export const ActivityContent = () => {
  return (
    <Stack css={sx.root}>
      <Stack css={sx.container}>
        <Typography
          variant="h1"
          fontSize="30px"
          fontWeight={700}
          color={Colors.BasicText}
          letterSpacing="0.02em"
        >
          {"Question & Answers"}
        </Typography>
        <Stack spacing={"20px"}>
          {models?.map((it, index) => (
            <AnswerItem key={index} question={it.question} answer={it.answer} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 100px;
  `,

  container: css`
    width: 556px;
    height: 483px;
  `,
};
