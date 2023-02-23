import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ActivityContent, ReadContent, WatchContent } from "./media";
import { DetailCourseType } from "@/domain/Progress/types/course.type";
import { useGetUnitItemContent1, useGetUnitItemContent2 } from "@/data/api/progress/useProgressApiHooks";

var studentIdNum  = 0;
var studentId     = '';
var courseId      = '';
var sectNum       = '';
var unitIds       = '';

type CourseMediaType = {
  selectedDetailCourse: DetailCourseType | null;
};

export const CourseMedia = ({ selectedDetailCourse }: CourseMediaType) => {

  if(selectedDetailCourse) {
    studentIdNum  = selectedDetailCourse.studentIdNum;
    studentId     = selectedDetailCourse.studentId;
    courseId      = selectedDetailCourse.courseId;
    sectNum       = selectedDetailCourse.sectNum;
  }

  return (
    <Stack css={sx.mediaContainer}>
      {selectedDetailCourse &&
        useMediaContentByCourseType(
          selectedDetailCourse.type,
          selectedDetailCourse.contentType,
          selectedDetailCourse.unitId
        )}
    </Stack>
  );
};

const sx = {
  mediaContainer: css`
    flex: 1;
    height: 754px;
  `,
};

const useMediaContentByCourseType = (type: string, contentType: string, unitId: string) => {
  unitIds = unitId
  //console.log("CourseMedia useMediaContentByCourseType studentIdNum : "+studentIdNum);
  //console.log("CourseMedia useMediaContentByCourseType studentId : "+studentId);
  //console.log("CourseMedia useMediaContentByCourseType courseId : "+courseId);
  //console.log("CourseMedia useMediaContentByCourseType unitId : "+unitIds);
  //console.log("CourseMedia useMediaContentByCourseType type : "+type);

  if(type) {
    switch (type) {
      case "embed":
        //console.log("CourseMedia useMediaContentByCourseType embed useGetUnitItemContent2");
        var data2 = useGetUnitItemContent2(studentIdNum, unitIds);
        var data  = data2?.data;
        var content = '';
        if(data)
        content = data[0].content;
        //console.log("CourseMedia useMediaContentByCourseType embed data2");
        //console.log(content);
        return <WatchContent url={content} />;
        //return <ReadContent url={content} />;
      case "assessmentV2":
        var data1 = useGetUnitItemContent1(studentId, courseId, unitIds);
        //console.log("CourseMedia useMediaContentByCourseType type : "+type);
        //console.log(data1);
        return <ActivityContent models={data1.data} />;
      default:
        return <></>;
    }
  }
};
